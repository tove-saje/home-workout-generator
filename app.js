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

// Round-robins across muscle groups, and within each group prefers the next
// exercise whose movement pattern hasn't been used yet in this workout.
function pickMain(pool, groups, count, usedPatterns) {
  const byGroup = {};
  groups.forEach((group) => {
    byGroup[group] = shuffle(pool.filter((exercise) => exercise.muscleGroup === group));
  });

  const picked = [];
  let order = groups.filter((group) => byGroup[group].length > 0);

  while (picked.length < count && order.length > 0) {
    for (const group of order) {
      if (picked.length >= count) break;
      const list = byGroup[group];
      let index = list.findIndex((exercise) => !usedPatterns.has(getPattern(exercise)));
      if (index === -1) index = 0;
      const [chosen] = list.splice(index, 1);
      picked.push(chosen);
      usedPatterns.add(getPattern(chosen));
    }
    order = order.filter((group) => byGroup[group].length > 0);
  }

  return picked;
}

// Prefers a movement pattern not seen yet in this workout above all else, then
// a cardio-tagged move, then the hardest option — a capstone burst to close things out.
function pickFinisher(pool, count, usedPatterns, usedNames) {
  const candidates = shuffle(pool.filter((exercise) => !usedNames.has(exercise.name)));

  candidates.sort((a, b) => {
    const aUsed = usedPatterns.has(getPattern(a)) ? 1 : 0;
    const bUsed = usedPatterns.has(getPattern(b)) ? 1 : 0;
    if (aUsed !== bUsed) return aUsed - bUsed;

    const cardioDiff = (b.muscleGroup === "cardio" ? 1 : 0) - (a.muscleGroup === "cardio" ? 1 : 0);
    if (cardioDiff !== 0) return cardioDiff;

    return LEVEL_RANK[b.difficulty] - LEVEL_RANK[a.difficulty];
  });

  return candidates.slice(0, count);
}

function buildWorkout() {
  const plan = DURATION_PLAN[state.duration];
  const pool = filterExercisePool();
  const relevantGroups = FOCUS_MUSCLE_GROUPS[state.focus];
  const usedPatterns = new Set();

  const main = pickMain(pool, relevantGroups, plan.main, usedPatterns);
  const usedNames = new Set(main.map((exercise) => exercise.name));
  main.forEach((exercise) => usedPatterns.add(getPattern(exercise)));

  const finisherPool = pool.filter((exercise) => !usedNames.has(exercise.name));
  const finisher = pickFinisher(finisherPool, plan.finisher, usedPatterns, usedNames);

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
    muscleEl.textContent = exercise.muscleGroup;
    if (isFinisher) {
      muscleEl.textContent += " · ";
      const tag = document.createElement("span");
      tag.className = "finisher-tag";
      tag.textContent = "Finisher";
      muscleEl.appendChild(tag);
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
