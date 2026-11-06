// styles: the first entry is the exercise's main style (it decides how sets/reps are shown in a "Mix" workout).
// pattern (optional): groups near-duplicate movements so a workout doesn't stack them.
const EXERCISES = [
  // Bodyweight — legs
  { name: "Bodyweight Squat", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["strength","lowImpact","barre"] },
  { name: "Walking Lunge", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Wall Sit", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["strength","lowImpact","barre"] },
  { name: "Reverse Lunge", equipment: "bodyweight", muscleGroup: "legs", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Curtsy Lunge", equipment: "bodyweight", muscleGroup: "legs", difficulty: "intermediate", styles: ["strength","lowImpact","barre"] },
  { name: "Jump Squat", equipment: "bodyweight", muscleGroup: "legs", difficulty: "advanced", styles: ["hiit","strength"] },
  { name: "Pistol Squat", equipment: "bodyweight", muscleGroup: "legs", difficulty: "advanced", styles: ["strength","lowImpact"] },
  { name: "Sumo Squat", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["strength","lowImpact","barre"], pattern: "squat" },
  { name: "Side Lunge", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["strength","lowImpact"], pattern: "lunge" },
  { name: "Standing Calf Raise", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["strength","lowImpact","barre"], pattern: "calf-raise" },
  { name: "Fast Bodyweight Squats", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["hiit"], pattern: "squat" },
  { name: "Speed Lunges", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["hiit"], pattern: "lunge" },
  { name: "Lateral Shuffle", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["hiit"], pattern: "shuffle" },
  { name: "Skater Steps", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["hiit","lowImpact"], pattern: "skater" },
  { name: "Jump Lunges", equipment: "bodyweight", muscleGroup: "legs", difficulty: "advanced", styles: ["hiit"], pattern: "plyo" },
  { name: "Leg Circles", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "leg-circle" },
  { name: "Side Kick Series", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["pilates","barre"], pattern: "side-kick" },
  { name: "Inner Thigh Lifts", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "inner-lift" },
  { name: "Plié Squats", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "plie" },
  { name: "Relevés", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "releve" },
  { name: "Parallel Squat Hold", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "squat-hold" },
  { name: "Passé Balance", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "passe" },
  { name: "Tendu Leg Lifts", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "tendu" },
  { name: "Second Position Plié", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "plie" },
  { name: "Fondu", equipment: "bodyweight", muscleGroup: "legs", difficulty: "intermediate", styles: ["barre"], pattern: "fondu" },
  { name: "Grand Plié Pulses", equipment: "bodyweight", muscleGroup: "legs", difficulty: "intermediate", styles: ["barre"], pattern: "plie" },
  { name: "Single-Leg Relevé Hold", equipment: "bodyweight", muscleGroup: "legs", difficulty: "advanced", styles: ["barre"], pattern: "releve" },
  { name: "Deep Squat Hold", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["mobility"], pattern: "squat-hold" },
  { name: "Hip Flexor Stretch", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["mobility"], pattern: "hip-flexor" },
  { name: "Standing Hamstring Stretch", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["mobility"], pattern: "hamstring" },
  { name: "Butterfly Stretch", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["mobility"], pattern: "butterfly" },
  { name: "Quad Stretch", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["mobility"], pattern: "quad" },
  { name: "Ankle Circles", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["mobility","lowImpact"], pattern: "ankle-circle" },
  { name: "Frog Stretch", equipment: "bodyweight", muscleGroup: "legs", difficulty: "intermediate", styles: ["mobility"], pattern: "frog" },
  { name: "Cossack Squat Stretch", equipment: "bodyweight", muscleGroup: "legs", difficulty: "intermediate", styles: ["mobility"], pattern: "cossack" },
  { name: "Deep Lunge with Twist", equipment: "bodyweight", muscleGroup: "legs", difficulty: "advanced", styles: ["mobility"], pattern: "lunge-twist" },
  { name: "Fast Step-Backs", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["hiit"], pattern: "step-back" },
  { name: "Fast Calf Raises", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner", styles: ["hiit"], pattern: "calf-raise" },

  // Bodyweight — glutes
  { name: "Glute Bridge", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner", styles: ["strength","lowImpact","pilates"] },
  { name: "Donkey Kicks", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner", styles: ["strength","lowImpact","pilates","barre"] },
  { name: "Fire Hydrant", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner", styles: ["strength","lowImpact","pilates","barre"] },
  { name: "Single-Leg Glute Bridge", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "intermediate", styles: ["strength","lowImpact","pilates","barre"] },
  { name: "Frog Pump", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "intermediate", styles: ["strength","lowImpact","pilates","barre"] },
  { name: "Fast Glute Bridges", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner", styles: ["hiit"], pattern: "hip-hinge" },
  { name: "Fast Donkey Kicks", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner", styles: ["hiit"], pattern: "hip-extension" },
  { name: "Fast Fire Hydrants", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner", styles: ["hiit"], pattern: "hip-abduction" },
  { name: "Side-Lying Leg Lifts", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner", styles: ["pilates","lowImpact","barre"], pattern: "side-lift" },
  { name: "Clamshells", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner", styles: ["pilates","lowImpact"] },
  { name: "Shoulder Bridge", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "intermediate", styles: ["pilates"] },
  { name: "Arabesque Lifts", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "arabesque" },
  { name: "Standing Glute Lifts", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "standing-lift" },
  { name: "Pigeon Pose", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner", styles: ["mobility"], pattern: "pigeon" },
  { name: "Figure-4 Stretch", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner", styles: ["mobility"], pattern: "figure-4" },
  { name: "90/90 Hip Switch", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "intermediate", styles: ["mobility"], pattern: "hip-switch" },

  // Bodyweight — chest
  { name: "Push-Up", equipment: "bodyweight", muscleGroup: "chest", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Incline Push-Up", equipment: "bodyweight", muscleGroup: "chest", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Wide Push-Up", equipment: "bodyweight", muscleGroup: "chest", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Diamond Push-Up", equipment: "bodyweight", muscleGroup: "chest", difficulty: "advanced", styles: ["strength","lowImpact"] },
  { name: "Wall Push-Up", equipment: "bodyweight", muscleGroup: "chest", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Fast Incline Push-Ups", equipment: "bodyweight", muscleGroup: "chest", difficulty: "beginner", styles: ["hiit"] },
  { name: "Fast Knee Push-Ups", equipment: "bodyweight", muscleGroup: "chest", difficulty: "beginner", styles: ["hiit"] },
  { name: "Clap Push-Ups", equipment: "bodyweight", muscleGroup: "chest", difficulty: "advanced", styles: ["hiit","strength"], pattern: "clap-pushup" },
  { name: "Pilates Knee Push-Up", equipment: "bodyweight", muscleGroup: "chest", difficulty: "beginner", styles: ["pilates","lowImpact"] },
  { name: "Chest Expansion", equipment: "bodyweight", muscleGroup: "chest", difficulty: "beginner", styles: ["pilates"], pattern: "chest-expansion" },
  { name: "Pilates Push-Up", equipment: "bodyweight", muscleGroup: "chest", difficulty: "intermediate", styles: ["pilates"] },
  { name: "Barre Knee Push-Up", equipment: "bodyweight", muscleGroup: "chest", difficulty: "beginner", styles: ["barre","lowImpact"] },
  { name: "Doorway Chest Stretch", equipment: "bodyweight", muscleGroup: "chest", difficulty: "beginner", styles: ["mobility"], pattern: "chest-stretch" },
  { name: "Fast Wall Push-Ups", equipment: "bodyweight", muscleGroup: "chest", difficulty: "beginner", styles: ["hiit"] },

  // Bodyweight — back
  { name: "Superman", equipment: "bodyweight", muscleGroup: "back", difficulty: "beginner", styles: ["strength","lowImpact","pilates"] },
  { name: "Reverse Snow Angel", equipment: "bodyweight", muscleGroup: "back", difficulty: "beginner", styles: ["strength","lowImpact","mobility","pilates"] },
  { name: "Bird Dog", equipment: "bodyweight", muscleGroup: "back", difficulty: "beginner", styles: ["strength","lowImpact","mobility","pilates"] },
  { name: "Superman Pull", equipment: "bodyweight", muscleGroup: "back", difficulty: "intermediate", styles: ["strength","lowImpact","pilates"] },
  { name: "Prone Y Raise", equipment: "bodyweight", muscleGroup: "back", difficulty: "beginner", styles: ["strength","lowImpact","barre"], pattern: "prone-raise" },
  { name: "Fast Superman Pulls", equipment: "bodyweight", muscleGroup: "back", difficulty: "beginner", styles: ["hiit"] },
  { name: "Fast Reverse Snow Angels", equipment: "bodyweight", muscleGroup: "back", difficulty: "beginner", styles: ["hiit"] },
  { name: "Swimming", equipment: "bodyweight", muscleGroup: "back", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "swim" },
  { name: "Swan Prep", equipment: "bodyweight", muscleGroup: "back", difficulty: "beginner", styles: ["pilates","mobility"], pattern: "cobra" },
  { name: "Reverse Fly Pulses", equipment: "bodyweight", muscleGroup: "back", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "fly" },
  { name: "Thread the Needle", equipment: "bodyweight", muscleGroup: "back", difficulty: "beginner", styles: ["mobility","lowImpact"], pattern: "thread" },
  { name: "Child's Pose", equipment: "bodyweight", muscleGroup: "back", difficulty: "beginner", styles: ["mobility"], pattern: "childs-pose" },
  { name: "Open Book Stretch", equipment: "bodyweight", muscleGroup: "back", difficulty: "intermediate", styles: ["mobility"], pattern: "open-book" },

  // Bodyweight — shoulders
  { name: "Arm Circles", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "beginner", styles: ["mobility","lowImpact","barre"] },
  { name: "Pike Push-Up", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Plank Shoulder Tap", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "intermediate", styles: ["strength","lowImpact","pilates"] },
  { name: "Walking Plank", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "intermediate", styles: ["strength","lowImpact","pilates"] },
  { name: "Speed Punches", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "beginner", styles: ["hiit"], pattern: "boxing" },
  { name: "Knee Plank Shoulder Taps", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "beginner", styles: ["hiit"], pattern: "shoulder-tap" },
  { name: "Pike Push-Up Burst", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "intermediate", styles: ["hiit"], pattern: "pike" },
  { name: "Pilates Arm Circles", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "arm-circle" },
  { name: "Port de Bras", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "port-de-bras" },
  { name: "Lateral Raise Pulses", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "raise" },
  { name: "Wall Angels", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "beginner", styles: ["mobility","lowImpact"], pattern: "wall-angel" },
  { name: "Cross-Body Shoulder Stretch", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "beginner", styles: ["mobility"], pattern: "shoulder-stretch" },
  { name: "Neck Rolls", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "beginner", styles: ["mobility"], pattern: "neck" },
  { name: "Eagle Arms Stretch", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "intermediate", styles: ["mobility"], pattern: "eagle" },
  { name: "Speed Arm Swings", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "beginner", styles: ["hiit"], pattern: "arm-swing" },

  // Bodyweight — arms
  { name: "Close-Grip Push-Up", equipment: "bodyweight", muscleGroup: "arms", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Tricep Kickback Pulse", equipment: "bodyweight", muscleGroup: "arms", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Floor Tricep Dip", equipment: "bodyweight", muscleGroup: "arms", difficulty: "beginner", styles: ["strength","lowImpact"], pattern: "dip" },
  { name: "Speed Tricep Kickbacks", equipment: "bodyweight", muscleGroup: "arms", difficulty: "beginner", styles: ["hiit"], pattern: "kickback" },
  { name: "Pilates Arm Pulses", equipment: "bodyweight", muscleGroup: "arms", difficulty: "beginner", styles: ["pilates","barre","lowImpact"], pattern: "arm-pulse" },
  { name: "Pilates Triceps Press-Up", equipment: "bodyweight", muscleGroup: "arms", difficulty: "intermediate", styles: ["pilates"], pattern: "dip" },
  { name: "Barre Arm Pulses", equipment: "bodyweight", muscleGroup: "arms", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "arm-pulse" },
  { name: "Barre Bicep Pulses", equipment: "bodyweight", muscleGroup: "arms", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "bicep-pulse" },
  { name: "Barre Tricep Pulses", equipment: "bodyweight", muscleGroup: "arms", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "tricep-pulse" },
  { name: "Tricep Stretch", equipment: "bodyweight", muscleGroup: "arms", difficulty: "beginner", styles: ["mobility"], pattern: "tricep-stretch" },
  { name: "Wrist and Forearm Stretch", equipment: "bodyweight", muscleGroup: "arms", difficulty: "beginner", styles: ["mobility"], pattern: "wrist" },

  // Bodyweight — core
  { name: "Plank", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["strength","lowImpact","pilates","barre"] },
  { name: "Crunch", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["strength","lowImpact","pilates","barre"] },
  { name: "Dead Bug", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["strength","lowImpact","pilates","barre"] },
  { name: "Bicycle Crunch", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate", styles: ["strength","lowImpact","pilates"] },
  { name: "Russian Twist", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate", styles: ["strength","lowImpact","pilates"] },
  { name: "Side Plank", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate", styles: ["strength","lowImpact","pilates","barre"] },
  { name: "Leg Raise", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate", styles: ["strength","lowImpact","pilates"] },
  { name: "Hollow Hold", equipment: "bodyweight", muscleGroup: "core", difficulty: "advanced", styles: ["strength","lowImpact","pilates"] },
  { name: "V-Up", equipment: "bodyweight", muscleGroup: "core", difficulty: "advanced", styles: ["strength","lowImpact","pilates"] },
  { name: "Reverse Crunch", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["strength","lowImpact","pilates"], pattern: "reverse-crunch" },
  { name: "Heel Taps", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["strength","lowImpact"], pattern: "heel-tap" },
  { name: "Bear Hold", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["strength","lowImpact"], pattern: "bear" },
  { name: "Standing Oblique Crunch", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["strength","lowImpact","barre"], pattern: "oblique" },
  { name: "Toe Taps", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["strength","lowImpact","pilates"], pattern: "toe-tap" },
  { name: "Flutter Kicks", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate", styles: ["strength","hiit"], pattern: "flutter" },
  { name: "Plank Hip Dips", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate", styles: ["strength"], pattern: "plank" },
  { name: "Fast Heel Taps", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["hiit"], pattern: "heel-tap" },
  { name: "Standing Knee Drives", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["hiit","lowImpact"], pattern: "knee-drive" },
  { name: "Speed Dead Bug", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["hiit"], pattern: "dead-bug" },
  { name: "Fast Crunches", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["hiit"], pattern: "crunch" },
  { name: "Reverse Crunch Pulses", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["hiit"], pattern: "reverse-crunch" },
  { name: "Plank Up-Downs", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate", styles: ["hiit"], pattern: "plank-updown" },
  { name: "High Plank Knee Drives", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate", styles: ["hiit"], pattern: "knee-drive" },
  { name: "The Hundred", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "hundred" },
  { name: "Single-Leg Stretch", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "leg-stretch" },
  { name: "Double-Leg Stretch", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "double-leg-stretch" },
  { name: "Teaser Prep", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "teaser" },
  { name: "Spine Stretch Forward", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["pilates","mobility"], pattern: "spine-stretch" },
  { name: "Half Roll-Down", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "roll-down" },
  { name: "Roll-Up", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate", styles: ["pilates"], pattern: "roll-up" },
  { name: "Criss-Cross", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate", styles: ["pilates"], pattern: "criss-cross" },
  { name: "Pilates Scissors", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate", styles: ["pilates"], pattern: "scissors" },
  { name: "Pilates Teaser", equipment: "bodyweight", muscleGroup: "core", difficulty: "advanced", styles: ["pilates"], pattern: "teaser" },
  { name: "Pilates Leg Pull Front", equipment: "bodyweight", muscleGroup: "core", difficulty: "advanced", styles: ["pilates"], pattern: "leg-pull" },
  { name: "Barre Ab Curl", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "ab-curl" },
  { name: "Barre Roll-Down", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "roll-down" },
  { name: "Torso Twist Pulses", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "twist" },
  { name: "Standing Ballet Knee Lift", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "knee-lift" },
  { name: "Seated V-Hold", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate", styles: ["barre","pilates"], pattern: "v-hold" },
  { name: "Side Bend Pulses", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "side-bend" },
  { name: "Supine Spinal Twist", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["mobility"], pattern: "twist-stretch" },
  { name: "Cobra Stretch", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["mobility"], pattern: "cobra" },
  { name: "Seated Spinal Twist", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["mobility"], pattern: "twist-stretch" },
  { name: "Cat-Cow", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["mobility","lowImpact"], pattern: "cat-cow" },
  { name: "Standing Side Bend", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["mobility"], pattern: "side-bend" },
  { name: "Knees-to-Chest Rock", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["mobility"], pattern: "knee-rock" },
  { name: "Fast Toe Taps", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["hiit"], pattern: "toe-tap" },
  { name: "Fast Oblique Crunches", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["hiit"], pattern: "oblique" },
  { name: "Quick Plank Knee Taps", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["hiit"], pattern: "plank-knee-tap" },
  { name: "Speed Reverse Crunches", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["hiit"], pattern: "reverse-crunch" },
  { name: "Seated Side Stretch", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner", styles: ["mobility"], pattern: "side-bend" },

  // Bodyweight — cardio
  { name: "Jumping Jacks", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["hiit"] },
  { name: "High Knees", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["hiit"] },
  { name: "Butt Kicks", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["hiit"] },
  { name: "Mountain Climbers", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "intermediate", styles: ["hiit"] },
  { name: "Skater Jumps", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "intermediate", styles: ["hiit"] },
  { name: "Burpees", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "advanced", styles: ["hiit"] },
  { name: "Squat Jump to Tuck", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "advanced", styles: ["hiit"] },
  { name: "Inchworm Walkout", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["strength"], pattern: "walkout" },
  { name: "Squat to Reach", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["strength","lowImpact"], pattern: "squat-reach" },
  { name: "Crab Walk", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["strength"], pattern: "crab" },
  { name: "Step-Back Knee Drive", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["strength","lowImpact"], pattern: "knee-drive" },
  { name: "Sit-to-Stand Power", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["strength"], pattern: "sit-stand" },
  { name: "Alternating Lunge Reach", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["strength","lowImpact"], pattern: "lunge-reach" },
  { name: "Duck Walk", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["strength"], pattern: "duck-walk" },
  { name: "Bear Crawl", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "intermediate", styles: ["strength"], pattern: "bear-crawl" },
  { name: "Squat Thrust", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "intermediate", styles: ["strength","hiit"], pattern: "squat-thrust" },
  { name: "Fast Feet", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["hiit"], pattern: "fast-feet" },
  { name: "Shadow Boxing", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["hiit"], pattern: "boxing" },
  { name: "Seal Jacks", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["hiit"], pattern: "cardio-burst" },
  { name: "Sprint in Place", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["hiit"], pattern: "sprint" },
  { name: "Jab-Cross Combo", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["hiit"], pattern: "boxing" },
  { name: "Star Reach Squats", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["hiit"], pattern: "star-reach" },
  { name: "Plank Jacks", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "intermediate", styles: ["hiit"], pattern: "plank-jack" },
  { name: "Lateral Hops", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "intermediate", styles: ["hiit"], pattern: "hop" },
  { name: "Tuck Jumps", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "advanced", styles: ["hiit"], pattern: "tuck-jump" },
  { name: "Plyo Lunges", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "advanced", styles: ["hiit"], pattern: "plyo" },
  { name: "March in Place", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["lowImpact"], pattern: "march" },
  { name: "Step Touch", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["lowImpact"], pattern: "step-touch" },
  { name: "Step Jacks", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["lowImpact"], pattern: "step-jack" },
  { name: "Heel Digs", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["lowImpact"], pattern: "heel-dig" },
  { name: "Grapevine", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["lowImpact"], pattern: "grapevine" },
  { name: "Side Step Reach", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["lowImpact"], pattern: "side-step" },
  { name: "Standing Cross-Crunch March", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["lowImpact"], pattern: "cross-march" },
  { name: "Low-Impact Knee Lifts", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["lowImpact"], pattern: "knee-lift" },
  { name: "Low-Impact Boxing", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["lowImpact"], pattern: "boxing" },
  { name: "Low-Impact Skater Glide", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "intermediate", styles: ["lowImpact"], pattern: "skater" },
  { name: "Standing Hundred", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "hundred" },
  { name: "Pilates Skater Glide", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "skater" },
  { name: "Standing Roll-Down", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["pilates","lowImpact","mobility"], pattern: "roll-down" },
  { name: "Standing Pilates Knee Lifts", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "knee-lift" },
  { name: "Standing Side Leg Sweeps", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "side-sweep" },
  { name: "Pilates Jacks", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["pilates"] },
  { name: "Plank to Pike Flow", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "intermediate", styles: ["pilates"], pattern: "plank-pike" },
  { name: "Pilates Teaser Flow", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "advanced", styles: ["pilates"], pattern: "teaser" },
  { name: "Plié Pulses with Arm Sweep", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "plie" },
  { name: "Chassé Shuffle", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "shuffle" },
  { name: "Relevé March", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "march" },
  { name: "Ballet Skip", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "skip" },
  { name: "Fast Tendu Taps", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "tendu" },
  { name: "Grand Plié Reach", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "plie" },
  { name: "Barre Cardio Jacks", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "intermediate", styles: ["barre"] },
  { name: "Sun Salutation Flow", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["mobility","lowImpact"], pattern: "sun-salutation" },
  { name: "Lunge and Twist Flow", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["mobility","lowImpact"], pattern: "lunge-twist" },
  { name: "Standing Windmill Flow", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["mobility","lowImpact"], pattern: "windmill" },
  { name: "Shoulder Roll March", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["mobility","lowImpact"], pattern: "march" },
  { name: "Hip Circle March", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["mobility","lowImpact"], pattern: "hip-circle" },
  { name: "Torso Swing Flow", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["mobility","lowImpact"], pattern: "torso-swing" },
  { name: "Arm Swing Squat Flow", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["mobility","lowImpact"], pattern: "arm-swing" },
  { name: "Standing Side Bend Sweep", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["mobility","lowImpact"], pattern: "side-bend" },
  { name: "Inchworm Flow", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["mobility"], pattern: "walkout" },
  { name: "Pilates Standing Leg Swings", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "leg-swing" },
  { name: "Pilates Walkout Flow", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "walkout" },
  { name: "Pas de Bourrée Steps", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "pas-de-bourree" },
  { name: "Ballet Jeté Steps", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "jete" },
  { name: "Reverse Lunge to Knee Drive", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["strength","lowImpact"], pattern: "lunge-drive" },
  { name: "Squat to Calf Raise", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner", styles: ["strength","lowImpact"], pattern: "squat-calf" },

  // Dumbbells — legs
  { name: "Dumbbell Goblet Squat", equipment: "dumbbells", muscleGroup: "legs", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Dumbbell Lunge", equipment: "dumbbells", muscleGroup: "legs", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Dumbbell Sumo Squat", equipment: "dumbbells", muscleGroup: "legs", difficulty: "intermediate", styles: ["strength","lowImpact","barre"] },
  { name: "Dumbbell Squat Press Burst", equipment: "dumbbells", muscleGroup: "legs", difficulty: "intermediate", styles: ["hiit","strength"], pattern: "squat" },
  { name: "Barre Dumbbell Plié Squat", equipment: "dumbbells", muscleGroup: "legs", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "plie" },

  // Dumbbells — glutes
  { name: "Dumbbell Romanian Deadlift", equipment: "dumbbells", muscleGroup: "glutes", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Dumbbell Single-Leg Deadlift", equipment: "dumbbells", muscleGroup: "glutes", difficulty: "advanced", styles: ["strength","lowImpact"] },

  // Dumbbells — chest
  { name: "Dumbbell Floor Press", equipment: "dumbbells", muscleGroup: "chest", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Dumbbell Pullover", equipment: "dumbbells", muscleGroup: "chest", difficulty: "intermediate", styles: ["strength","lowImpact","pilates"] },
  { name: "Dumbbell Chest Expansion", equipment: "dumbbells", muscleGroup: "chest", difficulty: "beginner", styles: ["pilates"], pattern: "chest-expansion" },

  // Dumbbells — back
  { name: "Dumbbell Bent-Over Row", equipment: "dumbbells", muscleGroup: "back", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Single-Arm Dumbbell Row", equipment: "dumbbells", muscleGroup: "back", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Renegade Row", equipment: "dumbbells", muscleGroup: "back", difficulty: "advanced", styles: ["strength","lowImpact"] },
  { name: "Dumbbell Speed Rows", equipment: "dumbbells", muscleGroup: "back", difficulty: "beginner", styles: ["hiit","strength"], pattern: "row" },

  // Dumbbells — shoulders
  { name: "Dumbbell Shoulder Press", equipment: "dumbbells", muscleGroup: "shoulders", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Dumbbell Lateral Raise", equipment: "dumbbells", muscleGroup: "shoulders", difficulty: "beginner", styles: ["strength","lowImpact","barre"] },
  { name: "Dumbbell Front Raise", equipment: "dumbbells", muscleGroup: "shoulders", difficulty: "beginner", styles: ["strength","lowImpact","barre"] },
  { name: "Arnold Press", equipment: "dumbbells", muscleGroup: "shoulders", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Dumbbell Fast Shoulder Press", equipment: "dumbbells", muscleGroup: "shoulders", difficulty: "intermediate", styles: ["hiit","strength"], pattern: "press" },
  { name: "Dumbbell Pilates Arm Series", equipment: "dumbbells", muscleGroup: "shoulders", difficulty: "beginner", styles: ["pilates"], pattern: "arm-series" },
  { name: "Dumbbell Shoulder Circles", equipment: "dumbbells", muscleGroup: "shoulders", difficulty: "beginner", styles: ["mobility","lowImpact"], pattern: "arm-circle" },

  // Dumbbells — arms
  { name: "Dumbbell Bicep Curl", equipment: "dumbbells", muscleGroup: "arms", difficulty: "beginner", styles: ["strength","lowImpact","barre"] },
  { name: "Dumbbell Hammer Curl", equipment: "dumbbells", muscleGroup: "arms", difficulty: "beginner", styles: ["strength","lowImpact","barre"] },
  { name: "Dumbbell Overhead Tricep Extension", equipment: "dumbbells", muscleGroup: "arms", difficulty: "intermediate", styles: ["strength","lowImpact","barre"] },
  { name: "Barre Dumbbell Arm Pulses", equipment: "dumbbells", muscleGroup: "arms", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "arm-pulse" },
  { name: "Barre Dumbbell Bicep Pulses", equipment: "dumbbells", muscleGroup: "arms", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "bicep-pulse" },

  // Dumbbells — core
  { name: "Dumbbell Russian Twist", equipment: "dumbbells", muscleGroup: "core", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Weighted Sit-Up", equipment: "dumbbells", muscleGroup: "core", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Dumbbell Roll-Up", equipment: "dumbbells", muscleGroup: "core", difficulty: "intermediate", styles: ["pilates"], pattern: "roll-up" },

  // Dumbbells — cardio
  { name: "Dumbbell Thrusters", equipment: "dumbbells", muscleGroup: "cardio", difficulty: "advanced", styles: ["hiit","strength"] },

  // Resistance Bands — legs
  { name: "Band Squat", equipment: "bands", muscleGroup: "legs", difficulty: "beginner", styles: ["strength","lowImpact","barre"] },
  { name: "Band Lateral Walk", equipment: "bands", muscleGroup: "legs", difficulty: "beginner", styles: ["strength","lowImpact","barre"] },
  { name: "Band Leg Press", equipment: "bands", muscleGroup: "legs", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Band Speed Squats", equipment: "bands", muscleGroup: "legs", difficulty: "beginner", styles: ["hiit","strength"], pattern: "squat" },
  { name: "Band Leg Circles", equipment: "bands", muscleGroup: "legs", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "leg-circle" },
  { name: "Band Barre Leg Lifts", equipment: "bands", muscleGroup: "legs", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "side-lift" },
  { name: "Band Plié Squat", equipment: "bands", muscleGroup: "legs", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "plie" },
  { name: "Band Hamstring Stretch", equipment: "bands", muscleGroup: "legs", difficulty: "beginner", styles: ["mobility"], pattern: "hamstring" },

  // Resistance Bands — glutes
  { name: "Band Clamshell", equipment: "bands", muscleGroup: "glutes", difficulty: "beginner", styles: ["strength","lowImpact","pilates","barre"] },
  { name: "Band Glute Kickback", equipment: "bands", muscleGroup: "glutes", difficulty: "beginner", styles: ["strength","lowImpact","pilates","barre"] },
  { name: "Band Hip Thrust", equipment: "bands", muscleGroup: "glutes", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Band Side-Lying Leg Lift", equipment: "bands", muscleGroup: "glutes", difficulty: "beginner", styles: ["pilates","lowImpact"], pattern: "side-lift" },
  { name: "Band Shoulder Bridge", equipment: "bands", muscleGroup: "glutes", difficulty: "intermediate", styles: ["pilates"] },
  { name: "Band Hip Opener", equipment: "bands", muscleGroup: "glutes", difficulty: "beginner", styles: ["mobility"], pattern: "hip-open" },

  // Resistance Bands — chest
  { name: "Band Chest Press", equipment: "bands", muscleGroup: "chest", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Band Chest Fly", equipment: "bands", muscleGroup: "chest", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Band Chest Expansion", equipment: "bands", muscleGroup: "chest", difficulty: "beginner", styles: ["pilates"], pattern: "chest-expansion" },
  { name: "Band Chest Opener", equipment: "bands", muscleGroup: "chest", difficulty: "beginner", styles: ["mobility"], pattern: "chest-stretch" },

  // Resistance Bands — back
  { name: "Band Row", equipment: "bands", muscleGroup: "back", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Band Pull-Apart", equipment: "bands", muscleGroup: "back", difficulty: "beginner", styles: ["strength","lowImpact","mobility"] },
  { name: "Band Lat Pulldown", equipment: "bands", muscleGroup: "back", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Band Fast Pull-Aparts", equipment: "bands", muscleGroup: "back", difficulty: "beginner", styles: ["hiit","strength"], pattern: "pull-apart" },
  { name: "Band Rowing", equipment: "bands", muscleGroup: "back", difficulty: "beginner", styles: ["pilates","lowImpact"] },

  // Resistance Bands — shoulders
  { name: "Band Lateral Raise", equipment: "bands", muscleGroup: "shoulders", difficulty: "beginner", styles: ["strength","lowImpact","barre"] },
  { name: "Band Front Raise", equipment: "bands", muscleGroup: "shoulders", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Band Overhead Press", equipment: "bands", muscleGroup: "shoulders", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Band Face Pull", equipment: "bands", muscleGroup: "shoulders", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Band Shoulder Dislocates", equipment: "bands", muscleGroup: "shoulders", difficulty: "beginner", styles: ["mobility","lowImpact"], pattern: "dislocate" },

  // Resistance Bands — arms
  { name: "Band Bicep Curl", equipment: "bands", muscleGroup: "arms", difficulty: "beginner", styles: ["strength","lowImpact","barre"] },
  { name: "Band Tricep Pushdown", equipment: "bands", muscleGroup: "arms", difficulty: "beginner", styles: ["strength","lowImpact","barre"] },
  { name: "Band Overhead Tricep Extension", equipment: "bands", muscleGroup: "arms", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Band Barre Arm Pulses", equipment: "bands", muscleGroup: "arms", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "arm-pulse" },

  // Resistance Bands — core
  { name: "Band Pallof Press", equipment: "bands", muscleGroup: "core", difficulty: "intermediate", styles: ["strength","lowImpact","pilates"] },
  { name: "Band Woodchopper", equipment: "bands", muscleGroup: "core", difficulty: "intermediate", styles: ["strength","lowImpact"] },

  // Kettlebell — legs
  { name: "Kettlebell Goblet Squat", equipment: "kettlebell", muscleGroup: "legs", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Kettlebell Lunge", equipment: "kettlebell", muscleGroup: "legs", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Kettlebell Squat Burst", equipment: "kettlebell", muscleGroup: "legs", difficulty: "intermediate", styles: ["hiit","strength"], pattern: "squat" },
  { name: "Kettlebell Plié Squat", equipment: "kettlebell", muscleGroup: "legs", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "plie" },

  // Kettlebell — glutes
  { name: "Kettlebell Deadlift", equipment: "kettlebell", muscleGroup: "glutes", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Kettlebell Swing", equipment: "kettlebell", muscleGroup: "glutes", difficulty: "intermediate", styles: ["hiit","strength"] },
  { name: "Single-Leg Kettlebell Deadlift", equipment: "kettlebell", muscleGroup: "glutes", difficulty: "advanced", styles: ["strength","lowImpact"] },
  { name: "Kettlebell Hip Circles", equipment: "kettlebell", muscleGroup: "glutes", difficulty: "intermediate", styles: ["mobility"], pattern: "hip-circle" },

  // Kettlebell — back
  { name: "Kettlebell Row", equipment: "kettlebell", muscleGroup: "back", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Kettlebell High Pull", equipment: "kettlebell", muscleGroup: "back", difficulty: "intermediate", styles: ["strength","lowImpact"] },

  // Kettlebell — shoulders
  { name: "Kettlebell Halo", equipment: "kettlebell", muscleGroup: "shoulders", difficulty: "beginner", styles: ["mobility","lowImpact"] },
  { name: "Kettlebell Overhead Press", equipment: "kettlebell", muscleGroup: "shoulders", difficulty: "intermediate", styles: ["strength","lowImpact"] },

  // Kettlebell — arms
  { name: "Kettlebell Curl", equipment: "kettlebell", muscleGroup: "arms", difficulty: "beginner", styles: ["strength","lowImpact"] },

  // Kettlebell — core
  { name: "Kettlebell Russian Twist", equipment: "kettlebell", muscleGroup: "core", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Kettlebell Windmill", equipment: "kettlebell", muscleGroup: "core", difficulty: "advanced", styles: ["strength","lowImpact"] },

  // Kettlebell — cardio
  { name: "Kettlebell Swing Cardio Set", equipment: "kettlebell", muscleGroup: "cardio", difficulty: "intermediate", styles: ["hiit","strength"] },
  { name: "Kettlebell Snatch", equipment: "kettlebell", muscleGroup: "cardio", difficulty: "advanced", styles: ["hiit","strength"] },

  // Bench/Chair — legs
  { name: "Step-Up", equipment: "bench", muscleGroup: "legs", difficulty: "beginner", styles: ["strength","lowImpact","barre"] },
  { name: "Bulgarian Split Squat", equipment: "bench", muscleGroup: "legs", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Box Jump", equipment: "bench", muscleGroup: "legs", difficulty: "advanced", styles: ["hiit","strength"] },
  { name: "Dumbbell Step-Up", equipment: "bench", muscleGroup: "legs", difficulty: "intermediate", styles: ["strength"], pattern: "step" },
  { name: "Chair Squat", equipment: "bench", muscleGroup: "legs", difficulty: "beginner", styles: ["strength","lowImpact"], pattern: "squat" },
  { name: "Chair Plié", equipment: "bench", muscleGroup: "legs", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "plie" },
  { name: "Chair Relevé", equipment: "bench", muscleGroup: "legs", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "releve" },
  { name: "Chair Passé Balance", equipment: "bench", muscleGroup: "legs", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "passe" },
  { name: "Chair Hip Flexor Stretch", equipment: "bench", muscleGroup: "legs", difficulty: "beginner", styles: ["mobility"], pattern: "hip-flexor" },

  // Bench/Chair — glutes
  { name: "Bench Hip Thrust", equipment: "bench", muscleGroup: "glutes", difficulty: "beginner", styles: ["strength","lowImpact","barre"] },
  { name: "Single-Leg Hip Thrust", equipment: "bench", muscleGroup: "glutes", difficulty: "advanced", styles: ["strength","lowImpact"] },
  { name: "Chair Arabesque Lift", equipment: "bench", muscleGroup: "glutes", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "arabesque" },
  { name: "Chair Standing Leg Lifts", equipment: "bench", muscleGroup: "glutes", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "standing-lift" },
  { name: "Chair Pigeon", equipment: "bench", muscleGroup: "glutes", difficulty: "intermediate", styles: ["mobility"], pattern: "pigeon" },

  // Bench/Chair — chest
  { name: "Decline Push-Up", equipment: "bench", muscleGroup: "chest", difficulty: "intermediate", styles: ["strength","lowImpact"] },
  { name: "Chair Push-Up", equipment: "bench", muscleGroup: "chest", difficulty: "beginner", styles: ["strength","lowImpact"] },
  { name: "Chair Chest Opener", equipment: "bench", muscleGroup: "chest", difficulty: "beginner", styles: ["mobility"], pattern: "chest-stretch" },

  // Bench/Chair — back
  { name: "Chair-Supported Incline Row", equipment: "bench", muscleGroup: "back", difficulty: "beginner", styles: ["strength","lowImpact"] },

  // Bench/Chair — shoulders
  { name: "Elevated Pike Push-Up", equipment: "bench", muscleGroup: "shoulders", difficulty: "intermediate", styles: ["strength","lowImpact"] },

  // Bench/Chair — arms
  { name: "Bench Tricep Dip", equipment: "bench", muscleGroup: "arms", difficulty: "beginner", styles: ["strength","lowImpact","barre"] },
  { name: "Bench Fast Tricep Dips", equipment: "bench", muscleGroup: "arms", difficulty: "intermediate", styles: ["hiit","strength"], pattern: "dip" },

  // Bench/Chair — core
  { name: "Bench Leg Raise", equipment: "bench", muscleGroup: "core", difficulty: "intermediate", styles: ["strength","lowImpact","pilates"] },
  { name: "Decline Sit-Up", equipment: "bench", muscleGroup: "core", difficulty: "advanced", styles: ["strength","lowImpact"] },
  { name: "Chair Barre Ab Curl", equipment: "bench", muscleGroup: "core", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "ab-curl" },
  { name: "Chair Seated Twist", equipment: "bench", muscleGroup: "core", difficulty: "beginner", styles: ["mobility"], pattern: "twist-stretch" },

  // Bench/Chair — cardio
  { name: "Step-Up Cardio Set", equipment: "bench", muscleGroup: "cardio", difficulty: "beginner", styles: ["lowImpact","strength"] },
  { name: "Bench Step-Up Sprints", equipment: "bench", muscleGroup: "cardio", difficulty: "beginner", styles: ["hiit"], pattern: "step" },

  // Ankle Weights — legs
  { name: "Ankle Weight Leg Lift", equipment: "ankleWeights", muscleGroup: "legs", difficulty: "beginner", styles: ["strength","lowImpact","pilates","barre"] },
  { name: "Ankle Weight Squat", equipment: "ankleWeights", muscleGroup: "legs", difficulty: "intermediate", styles: ["strength","lowImpact","barre"] },
  { name: "Ankle Weight Lunge", equipment: "ankleWeights", muscleGroup: "legs", difficulty: "intermediate", styles: ["strength","lowImpact","barre"] },
  { name: "Ankle Weight Side Kicks", equipment: "ankleWeights", muscleGroup: "legs", difficulty: "beginner", styles: ["pilates","barre"], pattern: "side-kick" },
  { name: "Ankle Weight Leg Circles", equipment: "ankleWeights", muscleGroup: "legs", difficulty: "intermediate", styles: ["pilates"], pattern: "leg-circle" },
  { name: "Ankle Weight Second Position Lift", equipment: "ankleWeights", muscleGroup: "legs", difficulty: "intermediate", styles: ["barre"], pattern: "side-lift" },
  { name: "Ankle Weight Fondu", equipment: "ankleWeights", muscleGroup: "legs", difficulty: "intermediate", styles: ["barre"], pattern: "fondu" },

  // Ankle Weights — glutes
  { name: "Ankle Weight Donkey Kick", equipment: "ankleWeights", muscleGroup: "glutes", difficulty: "beginner", styles: ["strength","lowImpact","pilates","barre"] },
  { name: "Ankle Weight Fire Hydrant", equipment: "ankleWeights", muscleGroup: "glutes", difficulty: "beginner", styles: ["strength","lowImpact","pilates","barre"] },
  { name: "Ankle Weight Kickback", equipment: "ankleWeights", muscleGroup: "glutes", difficulty: "intermediate", styles: ["strength","lowImpact","pilates","barre"] },
  { name: "Ankle Weight Fast Kickbacks", equipment: "ankleWeights", muscleGroup: "glutes", difficulty: "intermediate", styles: ["hiit","strength"], pattern: "hip-extension" },
  { name: "Ankle Weight Arabesque Lift", equipment: "ankleWeights", muscleGroup: "glutes", difficulty: "beginner", styles: ["barre","lowImpact"], pattern: "arabesque" },

  // Ankle Weights — core
  { name: "Ankle Weight Leg Raise", equipment: "ankleWeights", muscleGroup: "core", difficulty: "intermediate", styles: ["strength","lowImpact","pilates"] },
  { name: "Ankle Weight Single-Leg Stretch", equipment: "ankleWeights", muscleGroup: "core", difficulty: "intermediate", styles: ["pilates"], pattern: "leg-stretch" },

  // Ankle Weights — cardio
  { name: "Ankle Weight High Knees", equipment: "ankleWeights", muscleGroup: "cardio", difficulty: "intermediate", styles: ["hiit"] },

];
