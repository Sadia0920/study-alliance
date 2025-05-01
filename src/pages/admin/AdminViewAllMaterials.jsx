import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle2 from '../../shared/SectionTitle2';

export default function AdminViewAllMaterials() {

  const axiosSecure = useAxiosSecure();
  const { refetch, data: materials=[] } = useQuery({
    queryKey: ['materials'],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/material`)
        return res.data;
    }
})
 
  // delete Material
    const handleDeleteMaterials = (_id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/materials/${_id}`)
        .then(res => {
          // console.log(res.data)
          if(res.data.deletedCount > 0){
          refetch()
          Swal.fire({
          title: "Deleted!",
          text: "Materials has been deleted.",
          icon: "success"
        });
       
        }
        })
      }
    });
  }
  return (
    <div>
    <Helmet>
        <title>Study Alliance | View All Materials</title>
    </Helmet>
    
  {/* All Materials */}

  <div className='w-10/12 mx-auto py-7'>
   <SectionTitle2 subHeading='Materials Details' heading='All Materials'></SectionTitle2>
    <div className="overflow-x-auto">
    <table className="table">
    {/* head */}
    <thead>
      <tr className='text-gray-500'>
      <th>#</th>
      <th>Image</th>
      <th>Title</th>
      <th>Google Drive Link</th>
      <th>Action</th>
      </tr>
    </thead>
    <tbody> 
    {/* row 1 */}
    {
      materials.map((item,idx) =>  <tr key={item._id}>
      <th>{idx + 1}</th>
      <td><img class='w-20 h-20' src={item.image} alt="" /></td>
      <td>{item.title}</td>
      <td>{item.link}</td>
      <td>

      {/* delete button */}
      <button onClick={()=>handleDeleteMaterials(item._id)} className='btn'><i className="fa-regular fa-trash-can text-red-700"></i></button> 
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
