import { useEffect, useState } from 'react'
import { supabase } from './supabase'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './portal/login'
import Dashboard from './portal/dashboard'

// for dashboard, for now
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
