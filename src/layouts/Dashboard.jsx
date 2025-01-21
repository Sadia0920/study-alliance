import React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className=''>
      <Helmet>
        <title>Study Alliance | Dashboard</title>
      </Helmet>
      <div className='flex'>
        <div className='w-64 min-h-screen bg-slate-300'>
            <ul className='menu'>
              {/* student */}
                <li><NavLink to='/dashboard/about'>About</NavLink></li>
                <li><NavLink to='/dashboard/viewBookedSession'>View booked session</NavLink></li>
                <li><NavLink to='/dashboard/createNote'>Create Note</NavLink></li>
                <li><NavLink to='/dashboard/viewAllStudyMaterials'>View all study materials</NavLink></li>
                <li><NavLink to='/dashboard/managePersonalNotes'>Manage personal notes
                </NavLink></li>
                <li><NavLink to='/'>Home</NavLink></li>

                {/* tutor */}
                <li><NavLink to='/dashboard/createStudySession'>Create Study Session</NavLink></li>
                <li><NavLink to='/dashboard/viewAllStudySessions'>View All Study Sessions</NavLink></li>
                {/* <li><NavLink to='/dashboard/uploadMaterials'>Upload Materials</NavLink></li> */}
                <li><NavLink to='/dashboard/viewAllMaterials'>View All Materials</NavLink></li>

                {/* admin */}
                <li><NavLink to='/dashboard/viewAllUsers'>View All Users</NavLink></li>
                <li><NavLink to='/dashboard/adminViewAllStudySession'>Admin View All Study Session</NavLink></li>
                <li><NavLink to='/dashboard/adminViewAllMaterials'>Admin View All Materials</NavLink></li>
            </ul>
        </div>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}