import { useState } from 'react'

export default function FormField({ name, label, type = 'text', value, onChange, error, hint, autoComplete, placeholder }) {
  const [visible, setVisible] = useState(false)
  const isPassword = type === 'password'
  const description = [hint && `${name}-hint`, error && `${name}-error`].filter(Boolean).join(' ')

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <div className={`input-wrap ${error ? 'has-error' : ''}`}>
        <input id={name} name={name} type={isPassword && visible ? 'text' : type}
          value={value} onChange={onChange} autoComplete={autoComplete}
          placeholder={placeholder} required aria-invalid={Boolean(error)}
          aria-describedby={description || undefined} />
        {isPassword && <button className="visibility-button" type="button"
          onClick={() => setVisible(!visible)} aria-label={`${visible ? 'Hide' : 'Show'} ${label.toLowerCase()}`}
          aria-pressed={visible} aria-controls={name}>{visible ? 'Hide' : 'Show'}</button>}
      </div>
      {hint && <p className="field-hint" id={`${name}-hint`}>{hint}</p>}
      {error && <p className="field-error" id={`${name}-error`}>{error}</p>}
    </div>
  )
}
