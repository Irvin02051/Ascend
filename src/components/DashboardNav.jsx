import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [['Home', 'home'], ['Workouts', 'workouts'], ['Progress', 'progress'], ['Achievements', 'achievements'], ['Profile', 'profile']]
export default function DashboardNav() {
  const [open, setOpen] = useState(false)
  return <header className="dash-topbar">
    <a className="dash-skip" href="#dashboard-main">Skip to dashboard</a>
    <Link className="brand" to="/home" aria-label="Ascend home"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M5 32 20 7l15 25H25l-5-9-5 9Z" fill="currentColor" /></svg>ASCEND</Link>
    <button className="dash-menu" type="button" aria-expanded={open} aria-controls="dashboard-nav" onClick={() => setOpen(!open)}>{open ? 'Close menu' : 'Menu ☰'}</button>
    <nav id="dashboard-nav" className={`dash-nav ${open ? 'is-open' : ''}`} aria-label="Dashboard">
      {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <Link className="dash-signout" to="/login">Sign Out <span aria-hidden="true">↗</span></Link>
    </nav>
  </header>
}
