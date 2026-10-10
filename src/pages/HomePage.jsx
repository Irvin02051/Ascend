import { useEffect, useRef, useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import { DashboardCard, Icon, ProgressBar } from '../components/DashboardUI'
import { dashboard } from '../data/dashboard'
import './HomePage.css'

const number = (value) => value.toLocaleString('en-US')

function TodayPlan({ tasks }) {
  const completed = tasks.filter((task) => task.current >= task.target).length
  return <DashboardCard id="today" title="Today’s plan" eyebrow="SMALL STEPS. REAL MOMENTUM." className="dash-today" accessory={<span className="dash-badge">{completed} / {tasks.length} complete</span>}>
    <p className="dash-muted">Three simple goals. One stronger you.</p>
    <ul className="dash-tasks">{tasks.map((task) => <li key={task.id}>
      <span className="dash-icon-box"><Icon name={task.icon} /></span>
      <div className="dash-task-content"><div className="dash-task-heading"><h3>{task.title}</h3><span className="dash-reward">+{task.reward} EXP</span></div>
        <div className="dash-task-values"><span>{number(task.current)} / {number(task.target)} {task.unit}</span><span>{Math.round(task.current / task.target * 100)}%</span></div>
        <ProgressBar label={task.title} value={task.current} max={task.target} detail={`${number(task.current)} of ${number(task.target)} ${task.unit}`} />
      </div>
    </li>)}</ul>
    <p className="dash-footnote">Sample progress only · No activity or device tracking connected.</p>
  </DashboardCard>
}

function RecommendedWorkout({ workout }) {
  const [started, setStarted] = useState(false)
  return <DashboardCard id="workouts" title={workout.name} eyebrow="YOUR RECOMMENDED WORKOUT" className="dash-workout">
    <div className="dash-workout-art" aria-hidden="true"><Icon name="strength" /><span>01 <small>/ THE FOUNDATION</small></span></div>
    <div className="dash-workout-meta"><span>≈ {workout.minutes} minutes</span><span>{workout.difficulty}</span><span className="dash-reward">+{workout.reward} EXP</span></div>
    <p className="dash-muted">{workout.exercises.map((exercise) => exercise.name).join(' · ')}</p>
    <button className="dash-primary" type="button" aria-expanded={started} aria-controls="workout-preview" onClick={() => setStarted(!started)}>{started ? 'Close Workout Preview' : 'Start Workout'} <span aria-hidden="true">↗</span></button>
    <div id="workout-preview" hidden={!started} className="dash-workout-preview">
      <h3>Workout preview</h3><p className="dash-muted">Preview only. No timer, completion, or EXP is recorded.</p>
      <ol>{workout.exercises.map((exercise) => <li key={exercise.name}><strong>{exercise.name}</strong><span>{exercise.instruction}</span></li>)}</ol>
    </div>
  </DashboardCard>
}

function Categories({ categories }) {
  return <DashboardCard id="categories" title="Find your focus" eyebrow="WORKOUT CATEGORIES" className="dash-categories">
    <div className="dash-category-grid">{categories.map((category) => <article className="dash-category" key={category.name}>
      <Icon name={category.icon} /><span className="dash-category-level">Level {category.level}</span><h3>{category.name}</h3>
      <p>{category.exp} / {category.target} EXP</p><ProgressBar label={`${category.name} category EXP`} value={category.exp} max={category.target} />
    </article>)}</div>
    <p className="dash-footnote">Sample category levels track each training focus separately from your overall level.</p>
  </DashboardCard>
}

function RankChallenge({ challenge, rank }) {
  return <DashboardCard id="rank-challenge" title="A new rank. Earned differently." eyebrow="RANK CHALLENGE">
    <div className="dash-rank-path"><span>{rank}</span><span aria-hidden="true">····· → ·····</span><span className="dash-locked-rank">{challenge.nextRank}<Icon name="lock" /></span></div>
    <h3>{challenge.title}</h3><p className="dash-muted">Normal activities earn EXP and increase your <strong>level</strong>. Completing a special challenge advances your <strong>rank</strong> from {rank} to {challenge.nextRank}.</p>
    <p className="dash-small">Unlock requirement: {challenge.completed} / {challenge.required} qualifying workouts</p>
    <ProgressBar label="Rank challenge unlock progress" value={challenge.completed} max={challenge.required} />
    <button className="dash-locked-button" disabled={challenge.locked} type="button"><Icon name="lock" /> Challenge locked</button>
    <p className="dash-footnote">Sample rule: complete {challenge.required} qualifying workouts to unlock the special challenge. Unlocking alone does not award Rank {challenge.nextRank}.</p>
  </DashboardCard>
}

function WeeklyConsistency({ days, streak }) {
  const total = days.reduce((sum, day) => sum + day.workouts, 0)
  return <DashboardCard id="consistency" title="Keep showing up" eyebrow="WEEKLY CONSISTENCY" accessory={<span className="dash-badge">{total} workouts</span>}>
    <div className="dash-week">{days.map((day) => <div key={day.day} className={day.workouts ? 'is-complete' : ''}>
      <span>{day.day}</span><span className="dash-day-mark" aria-hidden="true">{day.workouts ? '✓' : '–'}</span><span className="dash-sr-only">{day.workouts ? `${day.workouts} completed workout` : 'No completed workouts'}</span>
    </div>)}</div>
    <p className="dash-muted"><strong>{streak}-day workout streak.</strong> Small efforts add up.</p>
    <p className="dash-footnote">Sample week through Wednesday. The streak includes four days from last week.</p>
  </DashboardCard>
}

export default function HomePage() {
  const { user, plan, workout, categories, challenge, week, achievement } = dashboard
  const heading = useRef(null)
  useEffect(() => { document.title = 'Home | Ascend Fitness'; heading.current?.focus() }, [])
  const remaining = Math.max(0, user.nextLevelExp - user.exp)
  return <div className="dashboard" id="home">
    <DashboardNav />
    <main id="dashboard-main" className="dash-main" tabIndex={-1}>
      <div className="dash-demo"><span className="dash-live-dot" aria-hidden="true" /> FRONTEND DEMO <span>Sample data · No real authentication or health tracking</span></div>
      <header className="dash-welcome"><div><p className="dash-kicker">YOUR JOURNEY, ONE DAY AT A TIME</p><h1 ref={heading} tabIndex={-1}>Welcome back, {user.name}<span className="dash-purple">.</span></h1><p className="dash-muted">You don’t have to do it all. Just take the next step.</p></div><div className="dash-streak"><span aria-hidden="true">↗</span><div><strong>{user.streak}-day streak</strong><small>Keep your momentum</small></div></div></header>
      <section className="dash-user-progress" id="progress" aria-label="Your level and rank">
        <div className="dash-rank-emblem" aria-label={`Rank ${user.rank}`}>{user.rank}<small>RANK</small></div>
        <div className="dash-level"><div className="dash-level-label"><h2>Level {user.level}<span> Your ascent begins</span></h2><strong>{user.exp} / {user.nextLevelExp} EXP</strong></div><ProgressBar label={`Level ${user.level} EXP`} value={user.exp} max={user.nextLevelExp} /><p>{remaining} EXP until Level {user.level + 1}. Every activity moves you forward.</p></div>
      </section>
      <div className="dash-grid"><TodayPlan tasks={plan} /><RecommendedWorkout workout={workout} /><Categories categories={categories} /><RankChallenge challenge={challenge} rank={user.rank} /><WeeklyConsistency days={week} streak={user.streak} />
        <DashboardCard id="achievements" title="First milestones matter" eyebrow="LATEST ACHIEVEMENT"><div className="dash-achievement"><span className="dash-trophy"><Icon name="trophy" /></span><div><span className="dash-badge">{achievement.unlocked ? 'Unlocked' : 'Locked'} · Sample</span><h3>{achievement.title}</h3><p className="dash-muted">{achievement.description}</p></div></div></DashboardCard>
      </div>
      <section id="profile" className="dash-profile" aria-labelledby="profile-title"><div><h2 id="profile-title">Your profile</h2><p>{user.name} · Rank {user.rank} · Level {user.level}</p></div><p>Temporary sample profile. Account editing and saved progress are not connected.</p></section>
      <footer className="dash-footer"><span>ASCEND FITNESS</span><span>A little stronger. A little higher. Every day.</span></footer>
    </main>
  </div>
}
