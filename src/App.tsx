import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './portal/login'
import Dashboard from './portal/dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/:name/:password" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
