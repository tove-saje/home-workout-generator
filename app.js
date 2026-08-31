const FOCUS_MUSCLE_GROUPS = {
  fullBody: ["legs", "glutes", "chest", "back", "shoulders", "arms", "core"],
  upperBody: ["chest", "back", "shoulders", "arms"],
  lowerBody: ["legs", "glutes"],
  core: ["core"],
  cardio: ["cardio"],
};

const LEVEL_RANK = { beginner: 0, intermediate: 1, advanced: 2 };

const SETS_REPS_BY_LEVEL = {
  beginner: { sets: 2, reps: 10 },
  intermediate: { sets: 3, reps: 12 },
  advanced: { sets: 4, reps: 15 },
};

// How many exercises each phase gets, by chosen duration.
const DURATION_PLAN = {
  10: { main: 3, finisher: 1 },
  20: { main: 5, finisher: 1 },
  30: { main: 7, finisher: 1 },
  45: { main: 9, finisher: 1 },
};

// Bodyweight exercises are always in the pool as a fallback, but should stay a
// small supplement, not the bulk of the workout — cap how many can appear.
const BODYWEIGHT_CAP_BY_DURATION = { 10: 1, 20: 2, 30: 2, 45: 2 };

const EQUIPMENT_LABELS = {
  bodyweight: "bodyweight",
  dumbbells: "dumbbells",
  bands: "resistance band",
  kettlebell: "kettlebell",
  bench: "bench / chair",
  ankleWeights: "ankle weights",
};

// Groups exercises by underlying movement so we don't stack near-duplicates
// (e.g. Push-Up, Incline Push-Up, Decline Push-Up all read as "pushup").
const PATTERN_KEYWORDS = [
  ["push-up", "pushup"],
  ["press", "press"],
  ["squat", "squat"],
  ["lunge", "lunge"],
  ["row", "row"],
  ["curl", "curl"],
  ["raise", "raise"],
  ["plank", "plank"],
  ["bridge", "hip-hinge"],
  ["thrust", "hip-hinge"],
  ["deadlift", "hinge"],
  ["twist", "rotation"],
  ["woodchopper", "rotation"],
  ["halo", "rotation"],
  ["windmill", "rotation"],
  ["crunch", "flexion"],
  ["sit-up", "flexion"],
  ["v-up", "flexion"],
  ["hollow", "flexion"],
  ["dip", "dip"],
  ["kickback", "kickback"],
  ["kick", "hip-extension"],
  ["jack", "cardio-burst"],
  ["climber", "cardio-burst"],
  ["jump", "cardio-burst"],
  ["swing", "swing"],
  ["snatch", "explosive"],
  ["burpee", "explosive"],
  ["superman", "extension"],
  ["snow angel", "extension"],
  ["dog", "extension"],
  ["dead bug", "anti-rotation"],
  ["pallof", "anti-rotation"],
  ["wall sit", "iso-hold"],
  ["step-up", "step"],
  ["box jump", "step"],
  ["clamshell", "hip-abduction"],
  ["hydrant", "hip-abduction"],
];

function getPattern(exercise) {
  const name = exercise.name.toLowerCase();
  for (const [keyword, pattern] of PATTERN_KEYWORDS) {
    if (name.includes(keyword)) return pattern;
  }
  return exercise.muscleGroup;
}

const state = {
  equipment: new Set(),
  duration: null,
  focus: null,
  level: null,
};

const setupScreen = document.getElementById("setup-screen");
const resultScreen = document.getElementById("result-screen");
const generateBtn = document.getElementById("generate-btn");
const setupHint = document.getElementById("setup-hint");
const regenerateBtn = document.getElementById("regenerate-btn");
const startOverBtn = document.getElementById("start-over-btn");
const exerciseList = document.getElementById("exercise-list");

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setupChipGroup(groupId, onChange) {
  const group = document.getElementById(groupId);
  const isMulti = group.dataset.multi === "true";
  group.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      if (isMulti) {
        chip.classList.toggle("selected");
      } else {
        group.querySelectorAll(".chip").forEach((c) => c.classList.remove("selected"));
        chip.classList.add("selected");
      }
      onChange(group, isMulti);
    });
  });
}

function updateGenerateButtonState() {
  const ready =
    state.equipment.size > 0 && state.duration && state.focus && state.level;
  generateBtn.disabled = !ready;
  setupHint.classList.toggle("hidden", ready);
}

setupChipGroup("equipment-group", (group) => {
  state.equipment = new Set(
    Array.from(group.querySelectorAll(".chip.selected")).map((c) => c.dataset.value)
  );
  updateGenerateButtonState();
});

setupChipGroup("duration-group", (group) => {
  const selected = group.querySelector(".chip.selected");
  state.duration = selected ? selected.dataset.value : null;
  updateGenerateButtonState();
});

setupChipGroup("focus-group", (group) => {
  const selected = group.querySelector(".chip.selected");
  state.focus = selected ? selected.dataset.value : null;
  updateGenerateButtonState();
});

setupChipGroup("level-group", (group) => {
  const selected = group.querySelector(".chip.selected");
  state.level = selected ? selected.dataset.value : null;
  updateGenerateButtonState();
});

function filterExercisePool() {
  const relevantGroups = FOCUS_MUSCLE_GROUPS[state.focus];
  const maxLevelRank = LEVEL_RANK[state.level];

  return EXERCISES.filter((exercise) => {
    const equipmentOk =
      exercise.equipment === "bodyweight" || state.equipment.has(exercise.equipment);
    const muscleOk = relevantGroups.includes(exercise.muscleGroup);
    const levelOk = LEVEL_RANK[exercise.difficulty] <= maxLevelRank;
    return equipmentOk && muscleOk && levelOk;
  });
}

// Ranks a candidate for picking: equipment the user actually selected always
// beats a bodyweight fallback, and an unused movement pattern always beats a repeat.
function rankCandidate(exercise, usedPatterns) {
  const isBodyweight = exercise.equipment === "bodyweight";
  const isFresh = !usedPatterns.has(getPattern(exercise));
  if (!isBodyweight && isFresh) return 0;
  if (!isBodyweight && !isFresh) return 1;
  if (isBodyweight && isFresh) return 2;
  return 3;
}

function pickBest(list, usedPatterns) {
  let bestIndex = 0;
  let bestRank = Infinity;
  list.forEach((exercise, i) => {
    const rank = rankCandidate(exercise, usedPatterns);
    if (rank < bestRank) {
      bestRank = rank;
      bestIndex = i;
    }
  });
  const [chosen] = list.splice(bestIndex, 1);
  return chosen;
}

// Round-robins across muscle groups. Within each group it prefers the user's
// selected equipment over a bodyweight fallback, and a fresh movement pattern
// over a repeat — and once the bodyweight cap is hit, bodyweight exercises
// stop being offered at all.
function pickMain(pool, groups, count, usedPatterns, bodyweightTracker, bodyweightCap) {
  const byGroup = {};
  groups.forEach((group) => {
    byGroup[group] = shuffle(pool.filter((exercise) => exercise.muscleGroup === group));
  });

  const picked = [];
  let order = groups.filter((group) => byGroup[group].length > 0);

  while (picked.length < count && order.length > 0) {
    for (const group of order) {
      if (picked.length >= count) break;

      if (bodyweightTracker.used >= bodyweightCap) {
        byGroup[group] = byGroup[group].filter((exercise) => exercise.equipment !== "bodyweight");
      }
      const list = byGroup[group];
      if (list.length === 0) continue;

      const chosen = pickBest(list, usedPatterns);
      picked.push(chosen);
      usedPatterns.add(getPattern(chosen));
      if (chosen.equipment === "bodyweight") bodyweightTracker.used++;
    }
    order = order.filter((group) => byGroup[group].length > 0);
  }

  return picked;
}

// Prefers a movement pattern not seen yet in this workout above all else, then
// a cardio-tagged move, then the hardest option — a capstone burst to close
// things out. Also respects the bodyweight cap set by the main picks.
function pickFinisher(pool, count, usedPatterns, usedNames, bodyweightTracker, bodyweightCap) {
  let candidates = shuffle(pool.filter((exercise) => !usedNames.has(exercise.name)));
  if (bodyweightTracker.used >= bodyweightCap) {
    candidates = candidates.filter((exercise) => exercise.equipment !== "bodyweight");
  }

  candidates.sort((a, b) => {
    const aUsed = usedPatterns.has(getPattern(a)) ? 1 : 0;
    const bUsed = usedPatterns.has(getPattern(b)) ? 1 : 0;
    if (aUsed !== bUsed) return aUsed - bUsed;

    const cardioDiff = (b.muscleGroup === "cardio" ? 1 : 0) - (a.muscleGroup === "cardio" ? 1 : 0);
    if (cardioDiff !== 0) return cardioDiff;

    return LEVEL_RANK[b.difficulty] - LEVEL_RANK[a.difficulty];
  });

  const chosen = candidates.slice(0, count);
  chosen.forEach((exercise) => {
    if (exercise.equipment === "bodyweight") bodyweightTracker.used++;
  });
  return chosen;
}

function buildWorkout() {
  const plan = DURATION_PLAN[state.duration];
  const pool = filterExercisePool();
  const relevantGroups = FOCUS_MUSCLE_GROUPS[state.focus];
  const usedPatterns = new Set();
  const bodyweightTracker = { used: 0 };
  // The cap only limits bodyweight as an unrequested fallback. If the user
  // actually selected Bodyweight, it's real equipment, not a filler — no cap.
  const bodyweightCap = state.equipment.has("bodyweight")
    ? Infinity
    : BODYWEIGHT_CAP_BY_DURATION[state.duration];

  const main = pickMain(pool, relevantGroups, plan.main, usedPatterns, bodyweightTracker, bodyweightCap);
  const usedNames = new Set(main.map((exercise) => exercise.name));
  main.forEach((exercise) => usedPatterns.add(getPattern(exercise)));

  const finisherPool = pool.filter((exercise) => !usedNames.has(exercise.name));
  const finisher = pickFinisher(
    finisherPool,
    plan.finisher,
    usedPatterns,
    usedNames,
    bodyweightTracker,
    bodyweightCap
  );

  return { main, finisher };
}

function renderWorkout(main, finisher) {
  const { sets, reps } = SETS_REPS_BY_LEVEL[state.level];
  exerciseList.innerHTML = "";

  const items = [
    ...main.map((exercise) => ({ exercise, badge: `${sets} × ${reps}`, isFinisher: false })),
    ...finisher.map((exercise) => ({ exercise, badge: `${sets} × ${reps}`, isFinisher: true })),
  ];

  items.forEach(({ exercise, badge, isFinisher }) => {
    const li = document.createElement("li");
    li.className = "exercise-card";
    li.innerHTML = `
      <div>
        <span class="exercise-name"></span>
        <span class="exercise-muscle"></span>
      </div>
      <span class="exercise-sets"></span>
    `;
    li.querySelector(".exercise-name").textContent = exercise.name;
    li.querySelector(".exercise-sets").textContent = badge;

    const muscleEl = li.querySelector(".exercise-muscle");
    muscleEl.textContent = exercise.muscleGroup + " · ";

    const equipmentTag = document.createElement("span");
    equipmentTag.className = "equipment-tag";
    equipmentTag.textContent = EQUIPMENT_LABELS[exercise.equipment];
    muscleEl.appendChild(equipmentTag);

    if (isFinisher) {
      muscleEl.appendChild(document.createTextNode(" · "));
      const finisherTag = document.createElement("span");
      finisherTag.className = "finisher-tag";
      finisherTag.textContent = "Finisher";
      muscleEl.appendChild(finisherTag);
    }

    exerciseList.appendChild(li);
  });
}

function generateAndShowWorkout() {
  const { main, finisher } = buildWorkout();
  renderWorkout(main, finisher);

  setupScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
}

function resetToSetup() {
  state.equipment = new Set();
  state.duration = null;
  state.focus = null;
  state.level = null;

  document.querySelectorAll(".chip.selected").forEach((chip) => chip.classList.remove("selected"));
  updateGenerateButtonState();

  resultScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
}

generateBtn.addEventListener("click", generateAndShowWorkout);
regenerateBtn.addEventListener("click", generateAndShowWorkout);
startOverBtn.addEventListener("click", resetToSetup);

updateGenerateButtonState();
