import React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink, Outlet } from 'react-router-dom'
import useAdmin from '../hooks/useAdmin';
import useTutor from '../hooks/useTutor';

export default function Dashboard() {
  // ToDo get isAdmin Value from the database
  const [isAdmin] = useAdmin();
  const [isTutor] = useTutor();
  return (
    <div>
      <Helmet>
        <title>Study Alliance | Dashboard</title>
      </Helmet>
    <div className='flex'>
    <div className='w-64 min-h-screen bg-slate-300'>
      <ul className='menu'>
      <li><NavLink to='/dashboard/about'><i className="fa-solid fa-circle-info"></i>About</NavLink></li>
        <li><NavLink to='/'><i className="fa-solid fa-house"></i>Home</NavLink></li>
        <div className="divider w-11/12 my-0 mx-auto"></div>
        {
          isAdmin ? 
          <>
            {/* admin */}
            <li><NavLink to='/dashboard/viewAllUsers'><i className="fa-solid fa-users"></i>View All Users</NavLink></li>
            <li><NavLink to='/dashboard/adminViewAllStudySession'><i className="fa-solid fa-book"></i>Admin View All Study Session</NavLink></li>
            <li><NavLink to='/dashboard/adminViewAllMaterials'><i className="fa-solid fa-file-lines"></i>Admin View All Materials</NavLink></li>
          </>
          :
          <>
         {
            isTutor ?
            <>
            {/* tutor */}
            <li><NavLink to='/dashboard/createStudySession'><i className="fa-solid fa-square-plus"></i>Create Study Session</NavLink></li>
            <li><NavLink to='/dashboard/viewAllStudySessions'><i className="fa-solid fa-book"></i>View All Study Sessions</NavLink></li>
            {/* <li><NavLink to='/dashboard/uploadMaterials'>Upload Materials</NavLink></li> */}
            <li><NavLink to='/dashboard/viewAllMaterials'><i className="fa-solid fa-file-lines"></i>View All Materials</NavLink></li>
            </>
            :
            <>
            {/* student */}
            <li><NavLink to='/dashboard/viewBookedSession'><i className="fa-solid fa-bookmark"></i>View booked session</NavLink></li>
            <li><NavLink to='/dashboard/createNote'><i className="fa-solid fa-circle-plus"></i>Create Note</NavLink></li>
            <li><NavLink to='/dashboard/viewAllStudyMaterials'><i className="fa-solid fa-file-lines"></i>View all study materials</NavLink></li>
            <li><NavLink to='/dashboard/managePersonalNotes'><i className="fa-solid fa-note-sticky"></i>Manage personal notes</NavLink></li>
            </>
          }
          </>
        }
        </ul>
        </div>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}