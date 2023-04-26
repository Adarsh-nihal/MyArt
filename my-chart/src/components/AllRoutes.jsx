import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Content from '../pages/Content'
import Login from '../pages/Login'
import {Routes,Route} from "react-router-dom"
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/content"  element={<Content/>} />
        <Route path="/login"  element={<Login />} />

    </Routes>
  )
}

export default AllRoutes