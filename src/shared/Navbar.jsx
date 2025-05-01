import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import { Tooltip } from 'react-tooltip'
import ThemeController from './ThemeController'
import './Navbar.css'

export default function Navbar() {
    const {signOutUser,user,setUser} = useContext(AuthContext)

    const handleSignOut = () => {
      // console.log('logOut')
      signOutUser()
      .then(()=>{
        // console.log('SignOut Successfully')
        setUser(null)
      })
      .catch(error => {
        // console.log(error.message)
      })
    }
  return (
    <div className='bg-[#EAE6FF] text-[rgb(51,51,51)] bg-opacity-60 fixed top-0 z-10 w-full'>
    <div className="navbar w-full md:w-10/12 mx-auto">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li className=' font-semibold text-[rgb(76,48,161)]'><NavLink to='/'>Home</NavLink></li>
        <li className=' font-semibold text-[rgb(76,48,161)]'><NavLink to='/allSession'>All Session</NavLink></li>
        <li className=' font-semibold text-[rgb(76,48,161)]'><NavLink to='/aboutUs'>About Us</NavLink></li>
      </ul>
    </div>


    <i className="fa-solid fa-book-open-reader text-xl custom:text-2xl text-[rgb(76,48,161)]"></i>
    <a className="btn btn-ghost custom:text-xl px-1 text-[rgb(76,48,161)]">Study Alliance</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className=' font-semibold text-[rgb(76,48,161)]'><NavLink to='/'>Home</NavLink></li>
      <li className=' font-semibold text-[rgb(76,48,161)]'><NavLink to='/allSession'>All Session</NavLink></li>
      <li className=' font-semibold text-[rgb(76,48,161)]'><NavLink to='/aboutUs'>About Us</NavLink></li>
    </ul>
  </div>
  <div className="md:navbar-end w-7/12 ml-[70px] lg:ml-14">
  {
      user?
      <>
      <a data-tooltip-id="my-tooltip"
  data-tooltip-content={user.displayName}
  data-tooltip-place="top">
      <img className='w-8 h-8 custom:w-9 custom:h-9 md:w-10 md:h-10 rounded-full' src={user.photoURL} alt="" />
      </a>
      <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn ml-1 custom:ml-3 bg-[rgb(76,48,161)] text-white rounded-full">
  <i className="fa-solid fa-bars"></i>
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
    <li><Link onClick={handleSignOut} className="btn bg-[rgb(76,48,161)] text-white">LogOut</Link></li>
    <li><Link to='/dashboard' className="btn text-white bg-[rgb(76,48,161)]">Dashboard</Link></li>
  </ul>
</div>
      </>
      :
      <>
      <i className="fa-solid fa-user text-white p-3 rounded-full bg-[rgb(76,48,161)]"></i>
      <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn border-none rounded-full ml-1 custom:ml-3 text-white bg-[rgb(76,48,161)]"><i className="fa-solid fa-bars"></i></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
    <li><Link to='/login' className="btn text-white bg-[rgb(76,48,161)]">Login</Link></li>
    <li><Link to='/register' className="btn text-white bg-[rgb(76,48,161)]">Register</Link></li>
  </ul>
</div>

      </>
}
<div className='hidden custom:block'>
<ThemeController></ThemeController>
</div>
      
  </div>
</div>
<Tooltip id="my-tooltip"/> 
    </div>
  )
}