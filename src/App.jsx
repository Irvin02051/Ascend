import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AuthLayout from './components/AuthLayout'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import WorkoutsPage from './pages/WorkoutsPage'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<AuthPage key="login" mode="login" />} />
          <Route path="/signup" element={<AuthPage key="signup" mode="signup" />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
