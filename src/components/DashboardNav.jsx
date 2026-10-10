import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [['Home', '/home'], ['Workouts', '/workouts'], ['Progress', '/home#progress'], ['Achievements', '/home#achievements'], ['Profile', '/home#profile']]
export default function DashboardNav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (!location.hash) return
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(location.hash.slice(1))
      if (target) {
        target.setAttribute('tabindex', '-1')
        target.focus({ preventScroll: true })
        target.scrollIntoView()
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [location])
  return <header className="dash-topbar">
    <a className="dash-skip" href="#dashboard-main">Skip to main content</a>
    <Link className="brand" to="/home" aria-label="Ascend home"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M5 32 20 7l15 25H25l-5-9-5 9Z" fill="currentColor" /></svg>ASCEND</Link>
    <button className="dash-menu" type="button" aria-expanded={open} aria-controls="dashboard-nav" onClick={() => setOpen(!open)}>{open ? 'Close menu' : 'Menu ☰'}</button>
    <nav id="dashboard-nav" className={`dash-nav ${open ? 'is-open' : ''}`} aria-label="Dashboard">
      {links.map(([label, path]) => <Link key={path} to={path} aria-current={`${location.pathname}${location.hash}` === path ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link className="dash-signout" to="/login">Sign Out <span aria-hidden="true">↗</span></Link>
    </nav>
  </header>
}
