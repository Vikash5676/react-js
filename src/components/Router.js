import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Router() {
  return (
    <div>
         <h1 class="text-center">component Life Cycle</h1>
         
      <nav >
       
            <div class="container-fluid m-4">
                <Link class="navbar-brand mx-5 " to="/Mounting">Mounting</Link>
                <Link class="navbar-brand mx-5" to="/Updating">Updating</Link>
                <Link class="navbar-brand mx-5" to="/Unmounting">Unounting</Link>
            </div>
        </nav>
        <hr/>
    <Outlet/>
    </div>
  )
}
