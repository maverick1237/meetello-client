
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import LowerBar from './components/LowerBar'

function Layout() {
  return (
    <>
    <div className='h-screen bg-white flex overflow-hidden '>
        <Sidebar />
        <Outlet />
        <LowerBar />
    </div>
        
    </>
  )
}

export default Layout