import React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='w-10/12 mx-auto'>
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <div className='flex'>
        <div className='w-64 min-h-screen bg-slate-300'>
            <ul className='menu'>
                <li><NavLink to='/dashboard/about'>About</NavLink></li>
                <li><NavLink to='cart'>My Cart</NavLink></li>
                <li><NavLink>Update</NavLink></li>
                <li><NavLink>All Session</NavLink></li>
            </ul>
        </div>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}