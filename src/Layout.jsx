
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function Layout() {
  return (
    <>
    <div className='h-screen bg-white flex overflow-hidden'>
        <Sidebar />
        <Outlet />
    </div>
        
    </>
  )
}

export default Layout