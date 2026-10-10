import { Icon } from './DashboardUI'
import { categoryIcons } from '../data/workouts'

export default function WorkoutCard({ workout, onView, featured = false }) {
  return <article className={`library-card ${featured ? 'library-featured' : ''}`}>
    <div className="library-card-top"><span className="dash-icon-box"><Icon name={categoryIcons[workout.category]} /></span><span className="dash-reward">+{workout.exp} EXP</span></div>
    <p className="library-category">{workout.category}</p>
    <h3>{workout.name}</h3>
    <div className="library-meta"><span>{workout.difficulty}</span><span>≈ {workout.minutes} min</span><span>{workout.exercises.length} exercises</span></div>
    <p className="library-equipment"><strong>Equipment</strong>{workout.equipment.join(', ')}</p>
    <button className="library-view" type="button" onClick={() => onView(workout)} aria-label={`View plan: ${workout.name}`} aria-haspopup="dialog">View Plan <span aria-hidden="true">↗</span></button>
  </article>
}
