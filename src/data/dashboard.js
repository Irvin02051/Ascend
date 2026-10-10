// Temporary fixtures only. No device, account, or database connection.
export const dashboard = {
  user: { name: 'Irvin', rank: 'E', level: 1, exp: 35, nextLevelExp: 100, streak: 7 },
  plan: [
    { id: 'strength', icon: 'strength', title: 'Complete Beginner Strength', current: 0, target: 1, unit: 'workout', reward: 100 },
    { id: 'steps', icon: 'steps', title: 'Walk 5,000 steps', current: 2300, target: 5000, unit: 'steps', reward: 40 },
    { id: 'sleep', icon: 'moon', title: 'Sleep eight hours', current: 7, target: 8, unit: 'hours', reward: 20 },
  ],
  workout: { name: 'Beginner Strength', minutes: 12, difficulty: 'Beginner', reward: 100,
    exercises: [{ name: 'Push-ups', instruction: '6 reps · use a wall or your knees if needed' }, { name: 'Squats', instruction: '10 controlled reps' }, { name: 'Plank', instruction: 'Hold for 20 seconds' }] },
  categories: [
    { name: 'Strength', icon: 'strength', level: 1, exp: 35, target: 100 },
    { name: 'Cardio', icon: 'pulse', level: 1, exp: 20, target: 100 },
    { name: 'Mobility', icon: 'mobility', level: 1, exp: 10, target: 100 },
    { name: 'Full Body', icon: 'body', level: 1, exp: 25, target: 100 },
    { name: 'Beginner', icon: 'summit', level: 1, exp: 60, target: 100 },
    { name: 'Custom', icon: 'custom', level: 1, exp: 0, target: 100 },
  ],
  challenge: { title: 'The next summit', nextRank: 'D', completed: 3, required: 5, locked: true },
  // The 7-day streak spans last week and Monday–Wednesday of this sample week.
  week: [
    { day: 'Mon', workouts: 1 }, { day: 'Tue', workouts: 1 }, { day: 'Wed', workouts: 1 },
    { day: 'Thu', workouts: 0 }, { day: 'Fri', workouts: 0 }, { day: 'Sat', workouts: 0 }, { day: 'Sun', workouts: 0 },
  ],
  achievement: { title: 'First Step', description: 'Complete your first workout', unlocked: true },
}
