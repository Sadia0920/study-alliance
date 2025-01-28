import React, { useContext} from 'react'
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './../../provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useNote from '../../hooks/useNote';

export default function CreateNote() {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useNote();

  const handleCreateNote = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const title = form.title.value;
    const description = form.description.value;
    const newNote = {email,description,title}
    // console.log(newNote)

    // send data to the server
    try{
        axiosSecure.post('/notes', newNote)
        .then(res => {
        // console.log(res.data)
          if(res.data.insertedId){
              Swal.fire({
                  title: 'Success',
                  text: 'Notes created successfully',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                })
                refetch()
          }
          form.reset()
          navigate('/dashboard/managePersonalNotes')
      })
    }
    catch (err) {
        Swal.fire({
            title: 'Error',
            text: 'Note created error',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }
  }
  return (
    <div className='w-10/12 mx-auto py-7'>
        <Helmet>
            <title>Study Alliance | Create Note</title>
        </Helmet>
        <div className=' bg-base-200 rounded-xl p-10'>
            <h2 className='text-center text-4xl font-bold text-[#374151]'>Create Note</h2>
            <p className='text-center text-[#1B1A1AB3] w-9/12 mx-auto mt-8'>It is a dedicated area where student can create their notes.</p>
        <form onSubmit={handleCreateNote}>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Email</span>
                </div>
                <input type="email" readOnly defaultValue={user.email} placeholder="Enter Email" name='email' className="input input-bordered w-full" required />
                </label>
            </div>
        </div>
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
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Description</span>
                </div>
                <textarea type="text" placeholder="Enter Description*" name='description' className="textarea" required></textarea>
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <input type="submit" value="Create Note" className="btn w-full font-bold border-white bg-[rgb(76,48,161)] text-white" />
        </div>
        </form>
        </div>
    </div>
  )
}