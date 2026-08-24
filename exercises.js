const EXERCISES = [
  // Bodyweight — legs
  { name: "Bodyweight Squat", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner" },
  { name: "Walking Lunge", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner" },
  { name: "Wall Sit", equipment: "bodyweight", muscleGroup: "legs", difficulty: "beginner" },
  { name: "Reverse Lunge", equipment: "bodyweight", muscleGroup: "legs", difficulty: "intermediate" },
  { name: "Curtsy Lunge", equipment: "bodyweight", muscleGroup: "legs", difficulty: "intermediate" },
  { name: "Jump Squat", equipment: "bodyweight", muscleGroup: "legs", difficulty: "advanced" },
  { name: "Pistol Squat", equipment: "bodyweight", muscleGroup: "legs", difficulty: "advanced" },

  // Bodyweight — glutes
  { name: "Glute Bridge", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner" },
  { name: "Donkey Kicks", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner" },
  { name: "Fire Hydrant", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "beginner" },
  { name: "Single-Leg Glute Bridge", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "intermediate" },
  { name: "Frog Pump", equipment: "bodyweight", muscleGroup: "glutes", difficulty: "intermediate" },

  // Bodyweight — chest
  { name: "Push-Up", equipment: "bodyweight", muscleGroup: "chest", difficulty: "beginner" },
  { name: "Incline Push-Up", equipment: "bodyweight", muscleGroup: "chest", difficulty: "beginner" },
  { name: "Wide Push-Up", equipment: "bodyweight", muscleGroup: "chest", difficulty: "intermediate" },
  { name: "Diamond Push-Up", equipment: "bodyweight", muscleGroup: "chest", difficulty: "advanced" },

  // Bodyweight — back
  { name: "Superman", equipment: "bodyweight", muscleGroup: "back", difficulty: "beginner" },
  { name: "Reverse Snow Angel", equipment: "bodyweight", muscleGroup: "back", difficulty: "beginner" },
  { name: "Bird Dog", equipment: "bodyweight", muscleGroup: "back", difficulty: "beginner" },
  { name: "Superman Pull", equipment: "bodyweight", muscleGroup: "back", difficulty: "intermediate" },

  // Bodyweight — shoulders
  { name: "Arm Circles", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "beginner" },
  { name: "Pike Push-Up", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "beginner" },
  { name: "Plank Shoulder Tap", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "intermediate" },
  { name: "Walking Plank", equipment: "bodyweight", muscleGroup: "shoulders", difficulty: "intermediate" },

  // Bodyweight — arms
  { name: "Close-Grip Push-Up", equipment: "bodyweight", muscleGroup: "arms", difficulty: "beginner" },
  { name: "Tricep Kickback Pulse", equipment: "bodyweight", muscleGroup: "arms", difficulty: "intermediate" },

  // Bodyweight — core
  { name: "Plank", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner" },
  { name: "Crunch", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner" },
  { name: "Dead Bug", equipment: "bodyweight", muscleGroup: "core", difficulty: "beginner" },
  { name: "Bicycle Crunch", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate" },
  { name: "Russian Twist", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate" },
  { name: "Side Plank", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate" },
  { name: "Leg Raise", equipment: "bodyweight", muscleGroup: "core", difficulty: "intermediate" },
  { name: "Hollow Hold", equipment: "bodyweight", muscleGroup: "core", difficulty: "advanced" },
  { name: "V-Up", equipment: "bodyweight", muscleGroup: "core", difficulty: "advanced" },

  // Bodyweight — cardio
  { name: "Jumping Jacks", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner" },
  { name: "High Knees", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner" },
  { name: "Butt Kicks", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "beginner" },
  { name: "Mountain Climbers", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "intermediate" },
  { name: "Skater Jumps", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "intermediate" },
  { name: "Burpees", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "advanced" },
  { name: "Squat Jump to Tuck", equipment: "bodyweight", muscleGroup: "cardio", difficulty: "advanced" },

  // Dumbbells — legs
  { name: "Dumbbell Goblet Squat", equipment: "dumbbells", muscleGroup: "legs", difficulty: "beginner" },
  { name: "Dumbbell Lunge", equipment: "dumbbells", muscleGroup: "legs", difficulty: "intermediate" },
  { name: "Dumbbell Sumo Squat", equipment: "dumbbells", muscleGroup: "legs", difficulty: "intermediate" },

  // Dumbbells — glutes
  { name: "Dumbbell Romanian Deadlift", equipment: "dumbbells", muscleGroup: "glutes", difficulty: "intermediate" },
  { name: "Dumbbell Single-Leg Deadlift", equipment: "dumbbells", muscleGroup: "glutes", difficulty: "advanced" },

  // Dumbbells — chest
  { name: "Dumbbell Floor Press", equipment: "dumbbells", muscleGroup: "chest", difficulty: "beginner" },
  { name: "Dumbbell Pullover", equipment: "dumbbells", muscleGroup: "chest", difficulty: "intermediate" },

  // Dumbbells — back
  { name: "Dumbbell Bent-Over Row", equipment: "dumbbells", muscleGroup: "back", difficulty: "beginner" },
  { name: "Single-Arm Dumbbell Row", equipment: "dumbbells", muscleGroup: "back", difficulty: "intermediate" },
  { name: "Renegade Row", equipment: "dumbbells", muscleGroup: "back", difficulty: "advanced" },

  // Dumbbells — shoulders
  { name: "Dumbbell Shoulder Press", equipment: "dumbbells", muscleGroup: "shoulders", difficulty: "beginner" },
  { name: "Dumbbell Lateral Raise", equipment: "dumbbells", muscleGroup: "shoulders", difficulty: "beginner" },
  { name: "Dumbbell Front Raise", equipment: "dumbbells", muscleGroup: "shoulders", difficulty: "beginner" },
  { name: "Arnold Press", equipment: "dumbbells", muscleGroup: "shoulders", difficulty: "intermediate" },

  // Dumbbells — arms
  { name: "Dumbbell Bicep Curl", equipment: "dumbbells", muscleGroup: "arms", difficulty: "beginner" },
  { name: "Dumbbell Hammer Curl", equipment: "dumbbells", muscleGroup: "arms", difficulty: "beginner" },
  { name: "Dumbbell Overhead Tricep Extension", equipment: "dumbbells", muscleGroup: "arms", difficulty: "intermediate" },

  // Dumbbells — core
  { name: "Dumbbell Russian Twist", equipment: "dumbbells", muscleGroup: "core", difficulty: "intermediate" },
  { name: "Weighted Sit-Up", equipment: "dumbbells", muscleGroup: "core", difficulty: "intermediate" },

  // Dumbbells — cardio
  { name: "Dumbbell Thrusters", equipment: "dumbbells", muscleGroup: "cardio", difficulty: "advanced" },

  // Resistance Bands — legs
  { name: "Band Squat", equipment: "bands", muscleGroup: "legs", difficulty: "beginner" },
  { name: "Band Lateral Walk", equipment: "bands", muscleGroup: "legs", difficulty: "beginner" },
  { name: "Band Leg Press", equipment: "bands", muscleGroup: "legs", difficulty: "intermediate" },

  // Resistance Bands — glutes
  { name: "Band Clamshell", equipment: "bands", muscleGroup: "glutes", difficulty: "beginner" },
  { name: "Band Glute Kickback", equipment: "bands", muscleGroup: "glutes", difficulty: "beginner" },
  { name: "Band Hip Thrust", equipment: "bands", muscleGroup: "glutes", difficulty: "intermediate" },

  // Resistance Bands — chest
  { name: "Band Chest Press", equipment: "bands", muscleGroup: "chest", difficulty: "beginner" },
  { name: "Band Chest Fly", equipment: "bands", muscleGroup: "chest", difficulty: "intermediate" },

  // Resistance Bands — back
  { name: "Band Row", equipment: "bands", muscleGroup: "back", difficulty: "beginner" },
  { name: "Band Pull-Apart", equipment: "bands", muscleGroup: "back", difficulty: "beginner" },
  { name: "Band Lat Pulldown", equipment: "bands", muscleGroup: "back", difficulty: "intermediate" },

  // Resistance Bands — shoulders
  { name: "Band Lateral Raise", equipment: "bands", muscleGroup: "shoulders", difficulty: "beginner" },
  { name: "Band Front Raise", equipment: "bands", muscleGroup: "shoulders", difficulty: "beginner" },
  { name: "Band Overhead Press", equipment: "bands", muscleGroup: "shoulders", difficulty: "intermediate" },
  { name: "Band Face Pull", equipment: "bands", muscleGroup: "shoulders", difficulty: "intermediate" },

  // Resistance Bands — arms
  { name: "Band Bicep Curl", equipment: "bands", muscleGroup: "arms", difficulty: "beginner" },
  { name: "Band Tricep Pushdown", equipment: "bands", muscleGroup: "arms", difficulty: "beginner" },
  { name: "Band Overhead Tricep Extension", equipment: "bands", muscleGroup: "arms", difficulty: "intermediate" },

  // Resistance Bands — core
  { name: "Band Pallof Press", equipment: "bands", muscleGroup: "core", difficulty: "intermediate" },
  { name: "Band Woodchopper", equipment: "bands", muscleGroup: "core", difficulty: "intermediate" },

  // Kettlebell — legs
  { name: "Kettlebell Goblet Squat", equipment: "kettlebell", muscleGroup: "legs", difficulty: "beginner" },
  { name: "Kettlebell Lunge", equipment: "kettlebell", muscleGroup: "legs", difficulty: "intermediate" },

  // Kettlebell — glutes
  { name: "Kettlebell Deadlift", equipment: "kettlebell", muscleGroup: "glutes", difficulty: "beginner" },
  { name: "Kettlebell Swing", equipment: "kettlebell", muscleGroup: "glutes", difficulty: "intermediate" },
  { name: "Single-Leg Kettlebell Deadlift", equipment: "kettlebell", muscleGroup: "glutes", difficulty: "advanced" },

  // Kettlebell — back
  { name: "Kettlebell Row", equipment: "kettlebell", muscleGroup: "back", difficulty: "beginner" },
  { name: "Kettlebell High Pull", equipment: "kettlebell", muscleGroup: "back", difficulty: "intermediate" },

  // Kettlebell — shoulders
  { name: "Kettlebell Halo", equipment: "kettlebell", muscleGroup: "shoulders", difficulty: "beginner" },
  { name: "Kettlebell Overhead Press", equipment: "kettlebell", muscleGroup: "shoulders", difficulty: "intermediate" },

  // Kettlebell — arms
  { name: "Kettlebell Curl", equipment: "kettlebell", muscleGroup: "arms", difficulty: "beginner" },

  // Kettlebell — core
  { name: "Kettlebell Russian Twist", equipment: "kettlebell", muscleGroup: "core", difficulty: "intermediate" },
  { name: "Kettlebell Windmill", equipment: "kettlebell", muscleGroup: "core", difficulty: "advanced" },

  // Kettlebell — cardio
  { name: "Kettlebell Swing Cardio Set", equipment: "kettlebell", muscleGroup: "cardio", difficulty: "intermediate" },
  { name: "Kettlebell Snatch", equipment: "kettlebell", muscleGroup: "cardio", difficulty: "advanced" },

  // Bench/Chair — legs
  { name: "Step-Up", equipment: "bench", muscleGroup: "legs", difficulty: "beginner" },
  { name: "Bulgarian Split Squat", equipment: "bench", muscleGroup: "legs", difficulty: "intermediate" },
  { name: "Box Jump", equipment: "bench", muscleGroup: "legs", difficulty: "advanced" },

  // Bench/Chair — glutes
  { name: "Bench Hip Thrust", equipment: "bench", muscleGroup: "glutes", difficulty: "beginner" },
  { name: "Single-Leg Hip Thrust", equipment: "bench", muscleGroup: "glutes", difficulty: "advanced" },

  // Bench/Chair — chest
  { name: "Decline Push-Up", equipment: "bench", muscleGroup: "chest", difficulty: "intermediate" },

  // Bench/Chair — back
  { name: "Chair-Supported Incline Row", equipment: "bench", muscleGroup: "back", difficulty: "beginner" },

  // Bench/Chair — shoulders
  { name: "Elevated Pike Push-Up", equipment: "bench", muscleGroup: "shoulders", difficulty: "intermediate" },

  // Bench/Chair — arms
  { name: "Bench Tricep Dip", equipment: "bench", muscleGroup: "arms", difficulty: "beginner" },

  // Bench/Chair — core
  { name: "Bench Leg Raise", equipment: "bench", muscleGroup: "core", difficulty: "intermediate" },
  { name: "Decline Sit-Up", equipment: "bench", muscleGroup: "core", difficulty: "advanced" },

  // Bench/Chair — cardio
  { name: "Step-Up Cardio Set", equipment: "bench", muscleGroup: "cardio", difficulty: "beginner" },

  // Ankle Weights — legs
  { name: "Ankle Weight Leg Lift", equipment: "ankleWeights", muscleGroup: "legs", difficulty: "beginner" },
  { name: "Ankle Weight Squat", equipment: "ankleWeights", muscleGroup: "legs", difficulty: "intermediate" },
  { name: "Ankle Weight Lunge", equipment: "ankleWeights", muscleGroup: "legs", difficulty: "intermediate" },

  // Ankle Weights — glutes
  { name: "Ankle Weight Donkey Kick", equipment: "ankleWeights", muscleGroup: "glutes", difficulty: "beginner" },
  { name: "Ankle Weight Fire Hydrant", equipment: "ankleWeights", muscleGroup: "glutes", difficulty: "beginner" },
  { name: "Ankle Weight Kickback", equipment: "ankleWeights", muscleGroup: "glutes", difficulty: "intermediate" },

  // Ankle Weights — core
  { name: "Ankle Weight Leg Raise", equipment: "ankleWeights", muscleGroup: "core", difficulty: "intermediate" },

  // Ankle Weights — cardio
  { name: "Ankle Weight High Knees", equipment: "ankleWeights", muscleGroup: "cardio", difficulty: "intermediate" },
];
