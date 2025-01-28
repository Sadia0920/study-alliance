import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function AdminViewAllStudySession() {
 
  const axiosSecure = useAxiosSecure();
  const { refetch, data: session=[] } = useQuery({
    queryKey: ['session'],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/session`)
        return res.data;
    }
})

// Approved
 const handleApproved = (id) => {
    axiosSecure.patch(`/session/approved/${id}`)
    .then(res => {
      // console.log(res.data)
      if(res.data.modifiedCount > 0){
        refetch()
        Swal.fire({
          title: 'Success',
          text: `status is a approved now`,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })
  }
 
  // Rejected
  const handleRejected = (id) => {
    axiosSecure.patch(`/session/rejected/${id}`)
    .then(res => {
      // console.log(res.data)
      if(res.data.modifiedCount > 0){
        refetch()
        Swal.fire({
          title: 'Success',
          text: `status is a rejected now`,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })
  }

// Update Registration Fee
  // const handleUpdateFee = (e,_id) => {
  //     e.preventDefault;
  //     const form = e.target
  //     const fee = form.registrationFee.value;
  //     const registrationFee = parseFloat(fee);
  //     const newUpdatedFee = {registrationFee}
  //     // console.log(newUpdatedFee)
  
  //     // send data to the server
  //     try{
  //         axiosSecure.put(`/session/${_id}`, newUpdatedFee)
  //         .then(res => {
  //         // console.log(res.data)
  //           if(res.data.modifiedCount > 0){
  //             Swal.fire({
  //               title: 'Success',
  //               text: 'Registration Fee Updated successfully',
  //               icon: 'success',
  //               confirmButtonText: 'Ok'
  //             })
  //             refetch()
  //           }
  //       })
  //     }
  //     catch (err) {
  //         Swal.fire({
  //             title: 'Error',
  //             text: 'Registration Fee updated error',
  //             icon: 'error',
  //             confirmButtonText: 'Ok'
  //           })
  //     }
  //   }
  
  return (
    <div className='w-10/12 mx-auto py-7'>
    <Helmet>
        <title>Study Alliance | View All Study Session</title>
    </Helmet>
    
  {/* All Session */}

  <h1 className='text-3xl font-bold text-center mb-6'>All Study Session</h1>
  <div className='w-full mx-auto mb-7'>
  {
    session.map((item) => 
    <div key={item._id}>
    <div className='bg-base-200 p-4 rounded-xl mb-5'>
    <h3 className="courseCard-title text-center text-gray-800">{item.sessionTitle}</h3>
    <p className="courseCard-description text-center text-gray-800">{item.sessionDescription}</p>
    <p className="text-lg font-semibold text-gray-800 text-left md:text-center">Tutor Name :<span className='text-gray-500'>{item.tutorName}</span></p>
    <div className='md:flex justify-evenly items-center gap-5'>
    <p className="text-lg  font-semibold text-gray-800">Registration Start Date :<span className='text-gray-500'>{item.registrationStartDate}</span></p>
    <p className="text-lg  font-semibold text-gray-800">Registration End Date :<span className='text-gray-500'>{item.registrationEndDate}</span></p>
    </div>
    <div className='md:flex justify-evenly items-center gap-5'>
    <p className="text-lg  font-semibold text-gray-800">Class Start Date :<span className='text-gray-500'>{item.classStartDate}</span></p>
    <p className="text-lg  font-semibold text-gray-800 text-left">Class End Date :<span className='text-gray-500'>{item.classEndDate}</span></p>
    </div>
    <div className='lg:flex justify-evenly items-center gap-5'>
    <p className="text-lg  font-semibold text-gray-800 text-left  md:text-center">Registration Fee :<span className='text-gray-500'>{item.registrationFee}</span></p>
    <p className="text-lg font-semibold text-gray-800 text-left  md:text-center">Status :<span className='text-gray-500'>{item.status}</span></p>
    </div>
    <div className="card-actions">
    {
        item.status === 'pending' ? 
        <>
         <div className="dropdown dropdown-hover w-6/12 md:w-5/12 lg:w-2/12 mx-auto mt-4">
            <div tabIndex={0} role="button" className="btn p-4 ml-3 text-white bg-[rgb(76,48,161)]">Update Status</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
            <li onClick={()=>handleApproved(item._id)} className="btn text-white bg-[rgb(76,48,161)]">Approved</li>
            <li onClick={()=>handleRejected(item._id)} className="btn text-white bg-[rgb(76,48,161)]">Rejected</li>
            </ul>
            </div>
        </> : <>
        {
          item.status === 'approved' ?
          <>
    <div className="w-7/12 md:w-6/12 lg:w-2/12 mx-auto mt-4">
    <Link to={`/dashboard/updateSession/${item._id}`}><button className='btn  text-[rgb(76,48,161)] bg-transparent border-[rgb(76,48,161)]'>Please Update the fee</button></Link>
    </div>
          </>
          :
          <>
          </>
        }
        </>
    }
   </div>
  </div>
    </div>)
    }
  </div>
  </div>
  )
}
