import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import BottomNavbar from './bottom-navbar'

const Portfolio = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <BottomNavbar/>
    </>
  )
}

export default Portfolio