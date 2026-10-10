const paths = {
  strength: 'M6 7v10M3 9v6m3-3h12m0-5v10m3-8v6',
  steps: 'M8 3v5l-3 4m3-4 5 4 2 8M13 12l-5 8m7-17 2 4 4 2',
  moon: 'M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z',
  pulse: 'M2 12h5l3-8 4 16 3-8h5',
  mobility: 'M4 18 12 6l8 12M7 13h10M12 6V2',
  body: 'M12 8v7m-7-5 7 2 7-2M8 22l4-7 4 7M12 2v2',
  summit: 'm3 20 9-16 9 16H3Zm5-9 4 3 4-3',
  custom: 'M4 6h16M4 12h16M4 18h16M8 3v6m8 0v6m-6 0v6',
  lock: 'M7 10V7a5 5 0 0 1 10 0v3M5 10h14v11H5Zm7 4v3',
  trophy: 'M7 3h10v8a5 5 0 0 1-10 0V3Zm0 2H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4m-5 4v5m-4 0h8',
}

export function Icon({ name, className = '' }) {
  return <svg className={`dash-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.summit} /></svg>
}

export function ProgressBar({ label, value, max, detail }) {
  const safeMax = Math.max(1, max)
  const bounded = Math.min(safeMax, Math.max(0, value))
  return <div className="dash-progress" role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={safeMax} aria-valuenow={bounded} aria-valuetext={detail}><span style={{ width: `${bounded / safeMax * 100}%` }} /></div>
}

export function DashboardCard({ id, title, eyebrow, children, className = '', accessory }) {
  return <section id={id} className={`dash-card ${className}`} aria-labelledby={`${id}-title`}>
    <header className="dash-card-heading"><div>{eyebrow && <p className="dash-kicker">{eyebrow}</p>}<h2 id={`${id}-title`}>{title}</h2></div>{accessory}</header>
    {children}
  </section>
}
