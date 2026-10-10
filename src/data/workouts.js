// Display-only sample plans. Duration includes warm-up, rests, and transitions.
export const workoutCategories = ['All', 'Beginner', 'Strength', 'Cardio', 'Mobility', 'Full Body', 'Custom']
export const categoryIcons = { Beginner: 'summit', Strength: 'strength', Cardio: 'pulse', Mobility: 'mobility', 'Full Body': 'body', Custom: 'custom' }

const exercise = (name, prescription, rest) => ({ name, prescription, rest })
export const workouts = [
  {
    id: 'beginner-strength', name: 'Beginner Strength', category: 'Beginner', difficulty: 'Beginner', minutes: 12, exp: 100,
    equipment: ['Mat', 'Wall'], recommended: true,
    description: 'Build familiarity with three foundational movements. Choose wall or knee push-ups to keep the session approachable.',
    warmup: '2 minutes: easy marching, shoulder circles, and shallow squats.',
    exercises: [exercise('Push-ups (wall or knees)', '2 sets × 6 reps', '45 seconds between sets'), exercise('Bodyweight squats', '2 sets × 10 reps', '45 seconds between sets'), exercise('Plank', '2 sets × 20 seconds', '40 seconds between sets')],
  },
  {
    id: 'first-move', name: 'First Move', category: 'Beginner', difficulty: 'Beginner', minutes: 8, exp: 60,
    equipment: ['Stable chair'], recommended: true,
    description: 'An easy introduction to movement using a chair for support. Move at a comfortable pace.',
    warmup: '2 minutes: easy marching and gentle arm swings.',
    exercises: [exercise('Chair sit-to-stand', '2 sets × 6 reps', '30 seconds between sets'), exercise('Standing calf raises', '2 sets × 10 reps', '30 seconds between sets'), exercise('Standing side steps', '2 sets × 30 seconds', '30 seconds between sets')],
  },
  {
    id: 'dumbbell-foundations', name: 'Dumbbell Foundations', category: 'Strength', difficulty: 'Beginner', minutes: 18, exp: 120,
    equipment: ['Light dumbbells', 'Mat'], recommended: false,
    description: 'Practice controlled strength movements with a light pair of dumbbells.',
    warmup: '3 minutes: marching, arm circles, and unloaded hip hinges.',
    exercises: [exercise('Goblet squat', '3 sets × 8 reps', '60 seconds between sets'), exercise('Bent-over dumbbell row', '3 sets × 8 reps', '60 seconds between sets'), exercise('Dumbbell floor press', '2 sets × 10 reps', '60 seconds between sets')],
  },
  {
    id: 'lower-body-builder', name: 'Lower Body Builder', category: 'Strength', difficulty: 'Intermediate', minutes: 25, exp: 160,
    equipment: ['Dumbbells', 'Mat'], recommended: false,
    description: 'A longer lower-body session for someone already comfortable with basic squats and hinges.',
    warmup: '4 minutes: marching, bodyweight squats, and unloaded hip hinges.',
    exercises: [exercise('Goblet squat', '3 sets × 10 reps', '60 seconds between sets'), exercise('Dumbbell Romanian deadlift', '3 sets × 10 reps', '60 seconds between sets'), exercise('Reverse lunge', '2 sets × 8 reps per side', '60 seconds between sets'), exercise('Glute bridge', '2 sets × 12 reps', '45 seconds between sets')],
  },
  {
    id: 'low-impact-cardio', name: 'Low Impact Cardio', category: 'Cardio', difficulty: 'Beginner', minutes: 10, exp: 80,
    equipment: ['None'], recommended: true,
    description: 'Get moving with standing, low-impact exercises and no jumping.',
    warmup: '2 minutes: relaxed marching, gradually increasing your pace.',
    exercises: [exercise('Brisk march in place', '3 sets × 40 seconds', '20 seconds between sets'), exercise('Step jacks', '3 sets × 40 seconds', '20 seconds between sets'), exercise('Side steps with arm reaches', '2 sets × 40 seconds', '20 seconds between sets')],
  },
  {
    id: 'cardio-circuit', name: 'Cardio Circuit', category: 'Cardio', difficulty: 'Intermediate', minutes: 20, exp: 140,
    equipment: ['None'], recommended: false,
    description: 'Build a steady rhythm with longer standing cardio intervals.',
    warmup: '3 minutes: easy marching, side steps, and arm swings.',
    exercises: [exercise('Fast march with arm drive', '4 sets × 45 seconds', '30 seconds between sets'), exercise('Standing alternating knee drives', '4 sets × 45 seconds', '30 seconds between sets'), exercise('Lateral steps', '4 sets × 45 seconds', '30 seconds between sets')],
  },
  {
    id: 'morning-mobility', name: 'Morning Mobility', category: 'Mobility', difficulty: 'Beginner', minutes: 7, exp: 50,
    equipment: ['Mat'], recommended: false,
    description: 'Explore comfortable ranges of motion in a short, unhurried session.',
    warmup: '1 minute: gentle walking and relaxed shoulder rolls.',
    exercises: [exercise('Cat-cow', '2 sets × 6 slow reps', '20 seconds between sets'), exercise('Seated torso rotations', '2 sets × 5 reps per side', '20 seconds between sets'), exercise('Ankle circles', '2 sets × 8 reps per side', '20 seconds between sets')],
  },
  {
    id: 'desk-reset', name: 'Desk Reset', category: 'Mobility', difficulty: 'Beginner', minutes: 10, exp: 60,
    equipment: ['Stable chair', 'Wall'], recommended: false,
    description: 'Take a movement break with simple standing and seated mobility work.',
    warmup: '2 minutes: easy walking and shoulder rolls.',
    exercises: [exercise('Wall slides', '2 sets × 8 reps', '30 seconds between sets'), exercise('Seated torso rotations', '2 sets × 6 reps per side', '30 seconds between sets'), exercise('Standing hip circles', '2 sets × 6 reps per side', '30 seconds between sets')],
  },
  {
    id: 'full-body-basics', name: 'Full Body Basics', category: 'Full Body', difficulty: 'Beginner', minutes: 15, exp: 110,
    equipment: ['Mat', 'Wall'], recommended: false,
    description: 'A balanced introduction to upper-body, lower-body, and core movement.',
    warmup: '3 minutes: easy marching, arm circles, and shallow squats.',
    exercises: [exercise('Wall push-ups', '2 sets × 10 reps', '45 seconds between sets'), exercise('Bodyweight squats', '2 sets × 10 reps', '45 seconds between sets'), exercise('Bird dog', '2 sets × 6 reps per side', '30 seconds between sets'), exercise('Glute bridge', '2 sets × 10 reps', '30 seconds between sets')],
  },
  {
    id: 'total-body-circuit', name: 'Total Body Circuit', category: 'Full Body', difficulty: 'Intermediate', minutes: 30, exp: 200,
    equipment: ['Dumbbells', 'Mat'], recommended: false,
    description: 'A longer session that combines familiar strength movements across the whole body.',
    warmup: '4 minutes: marching, arm circles, bodyweight squats, and unloaded hinges.',
    exercises: [exercise('Goblet squat', '3 sets × 10 reps', '60 seconds between sets'), exercise('Dumbbell row', '3 sets × 10 reps', '60 seconds between sets'), exercise('Dumbbell floor press', '3 sets × 10 reps', '60 seconds between sets'), exercise('Reverse lunge', '2 sets × 8 reps per side', '60 seconds between sets'), exercise('Plank', '3 sets × 30 seconds', '45 seconds between sets')],
  },
  {
    id: 'lunch-break-mix', name: 'Lunch Break Mix', category: 'Custom', difficulty: 'Beginner', minutes: 12, exp: 90,
    equipment: ['Stable chair', 'Wall'], recommended: false,
    description: 'A sample custom plan combining easy cardio and strength. Plan editing is not available yet.',
    warmup: '2 minutes: easy walking and arm swings.',
    exercises: [exercise('March in place', '3 sets × 40 seconds', '20 seconds between sets'), exercise('Chair sit-to-stand', '2 sets × 8 reps', '45 seconds between sets'), exercise('Wall push-ups', '2 sets × 8 reps', '45 seconds between sets')],
  },
  {
    id: 'weekend-mix', name: 'Weekend Mix', category: 'Custom', difficulty: 'Intermediate', minutes: 22, exp: 150,
    equipment: ['Dumbbells', 'Mat'], recommended: false,
    description: 'A sample custom blend of strength and standing cardio. This is a read-only plan.',
    warmup: '3 minutes: easy marching, shoulder circles, and unloaded squats.',
    exercises: [exercise('Goblet squat', '3 sets × 8 reps', '60 seconds between sets'), exercise('Dumbbell row', '3 sets × 8 reps', '60 seconds between sets'), exercise('Step jacks', '3 sets × 45 seconds', '30 seconds between sets'), exercise('Dead bug', '2 sets × 6 reps per side', '45 seconds between sets')],
  },
]
