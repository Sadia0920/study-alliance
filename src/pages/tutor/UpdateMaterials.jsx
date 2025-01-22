import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from './../../hooks/useAxiosPublic';
import useAxiosSecure from './../../hooks/useAxiosSecure';
import useUploadMaterials from './../../hooks/useUploadMaterials';
import { useForm } from "react-hook-form"

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function  UpdateMaterials() {
    const loadData = useLoaderData()
    const {_id,title,studySessionID,tutorEmail,image,link} = loadData;
    const navigate = useNavigate();
    const [,refetch]=useUploadMaterials();
    const {user} = useContext(AuthContext);
    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const onSubmit = async (data) => {
        // console.log(data)
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            const newUpdateMaterials = {
                title: data.title,
                studySessionID: data.studySessionID,
                tutorEmail: data.tutorEmail,
                image: res.data.data.display_url,
                link: data.link
            }
            try{
            axiosSecure.put(`/materials/${_id}`, newUpdateMaterials)
            .then(res => {
        console.log(res.data)
          if(res.data.modifiedCount > 0){
              Swal.fire({
                  title: 'Success',
                  text: 'Materials Update successfully',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                })
                refetch()
          }
          navigate('/dashboard/viewAllMaterials')
      })
    }
    catch (err) {
        Swal.fire({
            title: 'Error',
            text: 'Materials Update error',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }
        }        
        // console.log(res.data)
    }
  return (
    <div className='w-10/12 mx-auto py-7'>
        <Helmet>
            <title>Study Alliance | Update Materials</title>
        </Helmet>
    <div className=' bg-base-200 rounded-xl p-10'>
<h2 className='text-center text-4xl font-bold text-[#374151]'>Update Materials</h2>
<p className='text-center text-[#1B1A1AB3] w-9/12 mx-auto mt-8'>It is a dedicated area where tutor can update session materials.</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="submit" />
      <div className='mt-6'>
        <div className='md:w-full'>
        <label className="form-control">
        <div className="label">
        <span className="label-text font-bold">Title</span>
        </div>
        <input {...register("title")} type="text" defaultValue={title} placeholder="Enter Title*" name='title' className="input input-bordered w-full" required />
        </label>
        </div>
      </div>
      <div className='md:flex justify-between items-center gap-5 mt-6'>
        <div className='md:w-1/2'>
        <label className="form-control">
        <div className="label">
        <span className="label-text font-bold">Study Session ID</span>
        </div>
        <input {...register("studySessionID")} type="text" readOnly defaultValue={studySessionID} placeholder="Enter Study Session ID" name='studySessionID' className="input input-bordered w-full" required/>
        </label>
      </div>
      <div className='md:w-1/2'>
        <label className="form-control">
        <div className="label">
        <span className="label-text font-bold">Tutor Email</span>
        </div>
        <input {...register("tutorEmail")} type="email" readOnly defaultValue={user.email} placeholder="Enter Tutor Email" name='tutorEmail' className="input input-bordered w-full" required/>
        </label>
      </div>
     </div>
     <div className='mt-6'>
        <div className='md:w-full'>
        <label className="form-control">
        <div className="label">
        <span className="label-text font-bold">Image upload</span>
        </div>
        <input {...register("image")} type="file" className="file-input file-input-bordered  w-full" name='image'/>
        </label>
        </div>
     </div>
     <div className='mt-6'>
        <div className='md:w-full'>
        <label className="form-control">
        <div className="label">
        <span className="label-text font-bold">Google Drive Link</span>
        </div>
        <input {...register("link")} defaultValue={link} type="text" placeholder="Enter Google Drive Link*" name='link' className="input input-bordered w-full" required/>
        </label>
        </div>
     </div>
     <div className='mt-6'>
        <input type="submit" value="Update Materials" className="btn w-full font-bold border-white bg-[rgb(76,48,161)] text-white" />
    </div>
    </form>
    </div>
    </div>
  )
}


