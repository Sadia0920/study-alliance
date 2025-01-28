import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../hooks/useAxiosSecure';
//import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

export default function ViewAllUsers() {

  const axiosSecure = useAxiosSecure();
  //const axiosPublic = useAxiosPublic();
  const { refetch, data: users=[] } = useQuery({
    queryKey: ['users'],
    queryFn: async()=>{
      const res = await axiosSecure.get('/users')
      return res.data;
    }
})

const handleMakeTutor = (user) => {
  axiosSecure.patch(`/users/tutor/${user._id}`)
  .then(res => {
    console.log(res.data)
    if(res.data.modifiedCount > 0){
      refetch()
      Swal.fire({
        title: 'Success',
        text: `${user.name} is a tutor now`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
  })
}

const handleMakeStudent = (user) => {
  axiosSecure.patch(`/users/student/${user._id}`)
  .then(res => {
    console.log(res.data)
    if(res.data.modifiedCount > 0){
      refetch()
      Swal.fire({
        title: 'Success',
        text: `${user.name} is a student now`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
  })
}
  
  return (
    <div>
    <Helmet>
      <title>Study Alliance | View All Users</title>
    </Helmet>
    
  {/* Users */}

  <div className='w-10/12 mx-auto py-7'>
  <h1 className='text-3xl font-bold text-center mb-6'>All Users</h1>
    <div className="overflow-x-auto">
    <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
      <th>Action</th>
      </tr>
    </thead>
    <tbody> 
    {/* row */}
    {
      users.map((user,idx) =>  <tr key={user._id}>
      <th>{idx + 1}</th>
      <td>{user.name}</td>

      <td>{user.email}</td>
      <td>
        {
          user.role === 'admin' ? 'Admin' : 
          <>
          {
            user.role === 'tutor' ? 
           'Tutor'
          :
           'Student'
          }
          </>
  
        }
      </td>
      <td>
        {
          user.role === 'admin' ? 'Admin' : 
          <>
          {
            user.role === 'tutor' ? 
            <button onClick={()=> handleMakeStudent(user)} className='btn mb-2'>Update</button>
            :
            <button onClick={()=> handleMakeTutor(user)} className='btn mb-2'>Update</button>
          }
          </>
  
        }
      </td>
      </tr>)
    }
  </tbody>
  </table>
  </div>
  </div>
  </div>
  )
}
