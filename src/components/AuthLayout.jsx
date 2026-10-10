import { Link, Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <aside className="brand-panel" aria-label="Ascend Fitness">
        <Link className="brand" to="/login" aria-label="Ascend login">
          <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M5 32 20 7l15 25H25l-5-9-5 9Z" fill="currentColor" /></svg>
          ASCEND<span>FITNESS</span>
        </Link>
        <div className="brand-story">
          <p className="eyebrow"><span /> BUILT ONE DAY AT A TIME</p>
          <h2>Your next level.<br /><em>Starts with you.</em></h2>
          <p className="brand-description">Every rep. Every small victory. Every time you show up.<br className="desktop-break" /> It all adds up to a stronger you.</p>
          <div className="summit-art" aria-hidden="true">
            <svg viewBox="0 0 560 290" fill="none">
              <defs>
                <linearGradient id="mountain" x1="280" y1="40" x2="280" y2="270" gradientUnits="userSpaceOnUse"><stop stopColor="#a77aff" stopOpacity=".35" /><stop offset="1" stopColor="#8b5cf6" stopOpacity="0" /></linearGradient>
              </defs>
              <circle cx="290" cy="118" r="88" stroke="#74529d" strokeOpacity=".25" />
              <circle cx="290" cy="118" r="116" stroke="#74529d" strokeOpacity=".15" strokeDasharray="3 8" />
              <path d="M38 264 168 120l60 65L290 48l224 216Z" fill="url(#mountain)" />
              <path d="m38 264 130-144 60 65L290 48l224 216" stroke="#8b61c0" strokeWidth="1.5" />
              <path d="m168 120 12 144m110-216 15 216M228 185l-25 79" stroke="#6e488f" strokeOpacity=".6" />
              <path d="m207 263 45-53-9-25 45-62-8-24 10-51" stroke="#d4bbff" strokeWidth="3" strokeDasharray="5 7" />
              <path d="M290 49V23l32 10-32 10" stroke="#dfccff" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="207" cy="263" r="5" fill="#dbc2ff" />
              <path d="M22 265h514" stroke="#6f4c92" strokeOpacity=".5" />
            </svg>
            <span className="art-caption">THE ONLY WAY IS FORWARD</span>
          </div>
        </div>
        <div className="brand-footer"><span className="mini-symbol">↗</span> A little stronger. A little higher. Every day.</div>
      </aside>
      <main className="form-panel"><Outlet /></main>
    </div>
  )
}
