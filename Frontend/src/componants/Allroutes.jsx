import React from 'react'
import{Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
git import About from '../pages/About'

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Allroutes