export function validateAuth(values, isSignup) {
  const errors = {}
  if (isSignup && !values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address, such as you@example.com.'
  if (!values.password.trim()) errors.password = 'Please enter your password.'
  else if (values.password.length < 8) errors.password = 'Your password must contain at least 8 characters.'
  if (isSignup) {
    if (!values.confirmPassword.trim()) errors.confirmPassword = 'Please confirm your password.'
    else if (values.password !== values.confirmPassword) errors.confirmPassword = 'Your passwords do not match.'
  }
  return errors
}
