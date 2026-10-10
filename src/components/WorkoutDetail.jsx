import { useEffect, useRef } from 'react'

export default function WorkoutDetail({ workout, onClose }) {
  const dialogRef = useRef(null)
  const titleRef = useRef(null)
  useEffect(() => {
    const dialog = dialogRef.current
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    titleRef.current.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [])

  return <dialog className="library-dialog" ref={dialogRef} aria-labelledby="plan-title" onCancel={(event) => { event.preventDefault(); onClose() }}>
    <header className="library-dialog-header"><span className="library-category">WORKOUT PLAN · SAMPLE</span><button type="button" className="library-reset" onClick={onClose} aria-label="Close workout plan">Close ×</button></header>
    <h2 id="plan-title" ref={titleRef} tabIndex={-1}>{workout.name}</h2>
    <p className="library-description">{workout.description}</p>
    <dl className="library-plan-meta"><div><dt>Difficulty</dt><dd>{workout.difficulty}</dd></div><div><dt>Estimated duration</dt><dd>{workout.minutes} minutes</dd></div><div><dt>Sample reward</dt><dd>+{workout.exp} EXP</dd></div><div><dt>Equipment</dt><dd>{workout.equipment.join(', ')}</dd></div></dl>
    <section className="library-warmup" aria-labelledby="warmup-title"><h3 id="warmup-title">01 / Warm-up</h3><p>{workout.warmup}</p></section>
    <section aria-labelledby="exercises-title"><h3 id="exercises-title">02 / Your exercises</h3><p className="library-description">Complete the listed sets for each exercise before moving on. Rest 45–60 seconds between exercises. Duration includes warm-up, rests, and transitions.</p>
      <ol className="library-exercises">{workout.exercises.map((exercise) => <li key={exercise.name}><h4>{exercise.name}</h4><p>{exercise.prescription}</p><p className="library-rest">Rest: {exercise.rest}</p></li>)}</ol>
    </section>
    <p className="library-plan-note">Plan preview only. No timers, completion, EXP awards, or saved progress.</p>
    <button type="button" className="library-view" onClick={onClose}>Back to Workout Library</button>
  </dialog>
}
