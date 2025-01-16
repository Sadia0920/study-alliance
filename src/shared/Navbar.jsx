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
    <div className="navbar w-10/12 mx-auto">
    <div className="navbar-start">
    <i className="fa-solid fa-book-open-reader text-2xl text-[rgb(76,48,161)]"></i>
    <a className="btn btn-ghost text-xl px-1 text-[rgb(76,48,161)]">Study Alliance</a>
  </div>
  <div className="md:navbar-end w-7/12 ml-9 lg:ml-14">
  {
      user?
      <>
      <a data-tooltip-id="my-tooltip"
  data-tooltip-content={user.displayName}
  data-tooltip-place="top">
      <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
      </a>
      <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn ml-3 bg-[rgb(76,48,161)] text-white p-4 rounded-full">
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
  <div tabIndex={0} role="button" className="btn p-4 rounded-full ml-3 text-white bg-[rgb(76,48,161)]"><i className="fa-solid fa-bars"></i></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
    <li><Link to='/login' className="btn text-white bg-[rgb(76,48,161)]">Login</Link></li>
    <li><Link to='/register' className="btn text-white bg-[rgb(76,48,161)]">Register</Link></li>
  </ul>
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