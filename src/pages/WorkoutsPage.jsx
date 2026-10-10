import { useEffect, useRef, useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import WorkoutCard from '../components/WorkoutCard'
import WorkoutFilters from '../components/WorkoutFilters'
import WorkoutDetail from '../components/WorkoutDetail'
import { workouts } from '../data/workouts'
import { defaultFilters, filterWorkouts } from '../utils/workoutFilters'
import './HomePage.css'
import './WorkoutsPage.css'

export default function WorkoutsPage() {
  const [filters, setFilters] = useState(defaultFilters)
  const [selectedWorkout, setSelectedWorkout] = useState(null)
  const heading = useRef(null)
  const results = filterWorkouts(workouts, filters)
  const recommended = results.filter((workout) => workout.recommended)

  useEffect(() => {
    document.title = 'Workout Library | Ascend Fitness'
    heading.current?.focus()
  }, [])

  function changeFilter(key, value) { setFilters((current) => ({ ...current, [key]: value })) }
  function resetFilters() { setFilters({ ...defaultFilters }) }

  return <div className="dashboard workout-library">
    <DashboardNav />
    <main className="dash-main" id="dashboard-main" tabIndex={-1}>
      <div className="dash-demo"><span className="dash-live-dot" aria-hidden="true" /> FRONTEND DEMO <span>Sample plans · No progress is recorded</span></div>
      <header className="dash-welcome"><div><p className="dash-kicker">WORKOUT LIBRARY</p><h1 ref={heading} tabIndex={-1}>Choose Your Next Quest<span className="dash-purple">.</span></h1><p className="dash-muted">Start where you are. Find a plan that fits your time, experience, and goals.</p></div><span className="library-count">{workouts.length} plans to explore</span></header>
      <WorkoutFilters filters={filters} onChange={changeFilter} onReset={resetFilters} />
      <p className="library-result-count" role="status" aria-live="polite" aria-atomic="true">{results.length} {results.length === 1 ? 'workout matches' : 'workouts match'} your filters.</p>
      {recommended.length > 0 && <section className="library-recommendations" aria-labelledby="recommended-title"><header className="library-section-heading"><div><p className="dash-kicker">A GOOD PLACE TO START</p><h2 id="recommended-title">Recommended for Rank E</h2><p className="dash-muted">Short, approachable sample plans. Recommendations follow your filters.</p></div><span className="library-rank" aria-hidden="true">E</span></header><div className="library-grid">{recommended.map((workout) => <WorkoutCard key={workout.id} workout={workout} onView={setSelectedWorkout} featured />)}</div></section>}
      <section className="library-results" aria-labelledby="results-title"><header className="library-section-heading"><h2 id="results-title">Explore workouts</h2><span className="dash-muted">Sample EXP rewards</span></header>
        {results.length ? <div className="library-grid">{results.map((workout) => <WorkoutCard key={workout.id} workout={workout} onView={setSelectedWorkout} />)}</div> : <div className="library-empty"><span aria-hidden="true">◇</span><h3>No workouts found</h3><p>Try a shorter name, a different category, or a wider duration range.</p><button className="library-reset" type="button" onClick={resetFilters}>Reset Filters</button></div>}
      </section>
      <footer className="dash-footer"><span>ASCEND FITNESS</span><span>Choose a small step. Build a lasting habit.</span></footer>
    </main>
    {selectedWorkout && <WorkoutDetail workout={selectedWorkout} onClose={() => setSelectedWorkout(null)} />}
  </div>
}
