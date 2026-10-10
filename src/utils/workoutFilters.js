export const defaultFilters = { search: '', category: 'All', difficulty: 'All', duration: 'All' }

export function filterWorkouts(workouts, filters) {
  const query = filters.search.trim().toLowerCase()
  return workouts.filter((workout) => {
    const durationMatches = filters.duration === 'All'
      || (filters.duration === 'short' && workout.minutes <= 10)
      || (filters.duration === 'medium' && workout.minutes > 10 && workout.minutes <= 20)
      || (filters.duration === 'long' && workout.minutes > 20)
    return workout.name.toLowerCase().includes(query)
      && (filters.category === 'All' || workout.category === filters.category)
      && (filters.difficulty === 'All' || workout.difficulty === filters.difficulty)
      && durationMatches
  })
}
