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
    <div className='bg-[#EAE6FF] text-[rgb(51,51,51)] sticky top-0 z-10'>
    <div className="navbar w-10/12 mx-auto">
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
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allSession'>All Session</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        {
          user && 
          <>
          <li>
          <a>My Profile</a>
          <ul className="p-2">
          <li><NavLink>Add Volunteer Need Post</NavLink></li>
          <li><NavLink>ManageMyPosts</NavLink></li>
          </ul>
        </li>
          </>
        }
      </ul>
    </div>
    <i className="fa-solid fa-book-open-reader text-2xl text-[rgb(76,48,161)]"></i>
    <a className="btn btn-ghost text-xl px-1 text-[rgb(76,48,161)]">Study Alliance</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/allSession'>All Session</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      {
        user && 
        <>
        <li>
        <details>
          <summary>My Profile</summary>
          <ul className="p-2">
          <li><NavLink>Add Volunteer Need Post</NavLink></li>
          <li><NavLink>ManageMyPosts</NavLink></li>
          </ul>
        </details>
      </li>
        </>
      }
    </ul>
  </div>
  <div className="md:navbar-end w-7/12 ml-9 lg:ml-14">
  {
      user?
      <>
      <a data-tooltip-id="my-tooltip"
  data-tooltip-content={user.displayName}
  data-tooltip-place="top">
      <img className='w-8 h-8 rounded-full' src={user.photoURL} alt="" />
      </a>
      <Link onClick={handleSignOut} className="btn bg-[#A5D8FF] text-[#4A4A4A] ml-4">LogOut</Link>
      </>
      :
      <>
      <div className='flex md:flex-row flex-col'>
      <Link to='/login' className="btn mr-2 text-white bg-[rgb(76,48,161)]">Login</Link>
      <Link to='/register' className="btn text-white bg-[rgb(76,48,161)]">Register</Link>
      </div>
      </>
}
      <ThemeController></ThemeController>
  </div>
</div>
<Tooltip id="my-tooltip"/> 
    </div>
  )
}