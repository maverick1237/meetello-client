import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


function ProtectedRoutes() {
  const isUserLoggedIn = useSelector(state => state.auth.isLoggedIn)
    
    return (
        <div>
            {isUserLoggedIn ? <Outlet />: <Navigate to='/auth' />}
        </div>
  )
}

export default ProtectedRoutes