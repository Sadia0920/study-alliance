import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useUploadMaterials from '../../hooks/useUploadMaterials';

export default function ViewAllMaterials() {

  const axiosSecure = useAxiosSecure();
  const [materials,refetch] = useUploadMaterials();

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
            refetch();
          Swal.fire({
          title: "Deleted!",
          text: "Your Materials has been deleted.",
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
    
  {/* My Materials */}

  <div className='w-10/12 mx-auto py-7'>
  <h1 className='text-3xl font-bold text-center mb-6'>My Materials</h1>
    <div className="overflow-x-auto">
    <table className="table">
    {/* head */}
    <thead>
      <tr>
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

      {/* update button */}
      <Link to={`/dashboard/updateMaterials/${item._id}`}><button className='btn mb-2'><i className="fa-regular fa-pen-to-square"></i></button></Link>
      {/* delete button */}
      <button onClick={()=>handleDeleteMaterials(item._id)} className='btn'><i className="fa-regular fa-trash-can"></i></button> 
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
