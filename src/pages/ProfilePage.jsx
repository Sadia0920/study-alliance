import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Helmet } from 'react-helmet-async';

export default function ProfilePage() {
     const {user,setUser} = useContext(AuthContext)
  return (
    <div className='p-16 my-7 bg-[rgb(165,216,255,0.5)] w-10/12 mx-auto rounded-xl'>
        <Helmet>
        <title>Study Alliance | profile</title>
        </Helmet>
        <h1 className='text-center text-3xl font-bold'>My Profile</h1>
       <div className='text-center mt-7'>
       <img className='w-60 h-60 md:w-40 md:h-40 rounded-full mx-auto mb-3' src={user.photoURL} alt="" />
        <h2 className='text-lg font-semibold'>Name: {user.displayName}</h2>
        <h2 className='text-lg font-semibold'>Email: {user.email}</h2>
       </div>
    </div>
  )
}