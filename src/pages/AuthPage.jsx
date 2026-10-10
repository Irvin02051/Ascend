import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FormField from '../components/FormField'
import { validateAuth } from '../utils/validation'

export default function AuthPage({ mode }) {
  const isSignup = mode === 'signup'
  const [values, setValues] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [notice, setNotice] = useState('')
  const heading = useRef(null)

  useEffect(() => {
    document.title = `${isSignup ? 'Create account' : 'Log in'} | Ascend Fitness`
    heading.current?.focus()
  }, [isSignup])

  function handleChange(event) {
    const next = { ...values, [event.target.name]: event.target.value }
    setValues(next)
    setNotice('')
    if (submitted) setErrors(validateAuth(next, isSignup))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateAuth(values, isSignup)
    setErrors(nextErrors)
    setSubmitted(true)
    setNotice('')
    if (Object.keys(nextErrors).length) {
      event.currentTarget.elements.namedItem(Object.keys(nextErrors)[0])?.focus()
      return
    }
    setNotice('Your inputs pass the frontend checks. This is a demo only: no login was performed and no account was created.')
  }

  const fieldProps = (name) => ({ name, value: values[name], error: errors[name], onChange: handleChange })

  return (
    <section className="auth-card" aria-labelledby="form-title">
      <div className="section-mark" aria-hidden="true">↗</div>
      <p className="eyebrow">{isSignup ? 'MAKE YOUR FIRST MOVE' : 'KEEP YOUR MOMENTUM'}</p>
      <h1 id="form-title" ref={heading} tabIndex={-1}>{isSignup ? 'Start your ascent.' : 'Welcome back.'}</h1>
      <p className="form-description">{isSignup ? 'A stronger you starts with one small step.' : 'Show up for yourself. Your next step starts here.'}</p>
      <div className="auth-tabs" aria-label="Authentication pages">
        <Link to="/login" aria-current={!isSignup ? 'page' : undefined}>Log In</Link>
        <Link to="/signup" aria-current={isSignup ? 'page' : undefined}>Sign Up</Link>
      </div>
      <form noValidate onSubmit={handleSubmit}>
        {isSignup && <FormField {...fieldProps('name')} label="Name" autoComplete="name" placeholder="Your name" />}
        <FormField {...fieldProps('email')} label="Email" type="email" autoComplete="email" placeholder="you@example.com" />
        <FormField {...fieldProps('password')} label="Password" type="password" autoComplete={isSignup ? 'new-password' : 'current-password'} placeholder="Enter your password" hint="At least 8 characters" />
        {isSignup && <FormField {...fieldProps('confirmPassword')} label="Confirm password" type="password" autoComplete="new-password" placeholder="Re-enter your password" />}
        <button className="submit-button" type="submit">{isSignup ? 'Create Account' : 'Log In'}<span aria-hidden="true">↗</span></button>
        <p className="form-notice" role="status">{notice}</p>
      </form>
      <p className="switch-page">{isSignup ? 'Already have an account?' : 'New to Ascend?'}{' '}<Link to={isSignup ? '/login' : '/signup'}>{isSignup ? 'Log in' : 'Start your journey'} <span aria-hidden="true">→</span></Link></p>
      <p className="demo-note"><span aria-hidden="true">◇</span> Frontend preview · No accounts are created.</p>
    </section>
  )
}
