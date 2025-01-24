import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
// import Swal from 'sweetalert2';

export default function ViewAllUsers() {

  const axiosSecure = useAxiosSecure();
  const { refetch, data: users=[] } = useQuery({
    queryKey: ['users'],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/users`)
        return res.data;
    }
})
  
  return (
    <div>
    <Helmet>
        <title>Study Alliance | View All Users</title>
    </Helmet>
    
  {/* My Materials */}

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
    {/* row 1 */}
    {
      users.map((user,idx) =>  <tr key={user._id}>
      <th>{idx + 1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>

      {/* update button */}
      <Link><button className='btn mb-2'><i className="fa-regular fa-pen-to-square"></i></button></Link>
      {/* <Link to={`/dashboard/updateMaterials/${item._id}`}><button className='btn mb-2'><i className="fa-regular fa-pen-to-square"></i></button></Link> */}
     
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
