import React, { useContext, useState } from 'react'
// import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

export default function UploadMaterials() {
  const {user} = useContext(AuthContext);
  // const navigate = useNavigate()

  const  handleUploadMaterials = (event) => {

    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const studySessionID = form.studySessionID.value;
    const tutorEmail = form.tutorEmail.value;
    const imageUpload = form.imageUpload.value;
    const link = form.link.value;
    
    const newUploadMaterials = {title,studySessionID,tutorEmail,imageUpload,link}
    console.log(newUploadMaterials)

    // send data to the server
    // try{
    //     axios.post('https://volun-force-server.vercel.app/posts', newPost)
    //     .then(res => {
    //     //   console.log(res.data)
    //       if(res.data.insertedId){
    //           Swal.fire({
    //               title: 'Success',
    //               text: 'Post added successfully',
    //               icon: 'success',
    //               confirmButtonText: 'Ok'
    //             })
    //       }
    //       form.reset()
    //       navigate('/manageMyPosts')
    //   })
    // }
    // catch (err) {
    //     Swal.fire({
    //         title: 'Error',
    //         text: 'Post added error',
    //         icon: 'error',
    //         confirmButtonText: 'Ok'
    //       })
    // }
    
  }
  return (
    <div className='w-10/12 mx-auto py-7'>
        <Helmet>
            <title>Study Alliance | Upload Materials</title>
        </Helmet>
        <div className=' bg-base-200 rounded-xl p-10'>
            <h2 className='text-center text-4xl font-bold text-[#374151]'>Upload Materials</h2>
            <p className='text-center text-[#1B1A1AB3] w-9/12 mx-auto mt-8'>It is a dedicated area where tutor can upload materials.</p>
        <form onSubmit={handleUploadMaterials}>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Title</span>
                </div>
                <input type="text" placeholder="Enter Title*" name='title' className="input input-bordered w-full" required />
                </label>
            </div>
        </div>
        <div className='md:flex justify-between items-center gap-5 mt-6'>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Study Session ID</span>
                </div>
                <input type="text" readOnly placeholder="Enter Study Session ID" name='studySessionID' className="input input-bordered w-full" required/>
                </label>
            </div>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Tutor Email</span>
                </div>
                <input type="email" readOnly defaultValue={user.email} placeholder="Enter Tutor Email" name='tutorEmail' className="input input-bordered w-full" required/>
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Image upload</span>
                </div>
                <input type="text" placeholder="Enter Image Upload*" name='imageUpload' className="input input-bordered w-full" required/>
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Google Drive Link</span>
                </div>
                <input type="text" placeholder="Enter Google Drive Link*" name='link' className="input input-bordered w-full" required/>
                </label>
            </div>
        </div>
        <div className='mt-6'>
        <input type="submit" value="Upload Materials" className="btn w-full font-bold border-white bg-[rgb(76,48,161)] text-white" />
        </div>
        </form>
        </div>
    </div>
  )
}

