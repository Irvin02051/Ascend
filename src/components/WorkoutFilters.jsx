import { workoutCategories } from '../data/workouts'

export default function WorkoutFilters({ filters, onChange, onReset }) {
  return <section className="library-filters" aria-label="Filter workouts">
    <div className="library-filter-row">
      <label className="library-search">Search workouts<input type="search" value={filters.search} onChange={(event) => onChange('search', event.target.value)} placeholder="Search by workout name…" /></label>
      <label>Difficulty<select value={filters.difficulty} onChange={(event) => onChange('difficulty', event.target.value)}><option value="All">All difficulties</option><option>Beginner</option><option>Intermediate</option></select></label>
      <label>Duration<select value={filters.duration} onChange={(event) => onChange('duration', event.target.value)}><option value="All">Any duration</option><option value="short">10 minutes or less</option><option value="medium">11–20 minutes</option><option value="long">Over 20 minutes</option></select></label>
      <button className="library-reset" onClick={onReset} type="button">Reset Filters</button>
    </div>
    <fieldset className="library-categories"><legend>Category</legend><div>{workoutCategories.map((category) => <button key={category} type="button" aria-pressed={filters.category === category} onClick={() => onChange('category', category)}>{category}</button>)}</div></fieldset>
  </section>
}
