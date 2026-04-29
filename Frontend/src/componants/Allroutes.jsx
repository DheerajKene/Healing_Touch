import React from 'react'
import{Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from './Login'
import Register from './Register'

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default Allroutes