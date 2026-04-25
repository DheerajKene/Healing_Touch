import React from 'react'
import{Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from './Login'

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Allroutes