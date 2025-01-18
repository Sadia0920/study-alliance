import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useNote from '../../hooks/useNote';
import useAxiosSecure from '../../hooks/useAxiosSecure';

export default function UpdateNote() {
    const loadData = useLoaderData()
  const {_id,email,description,title} = loadData;
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useNote();

  const handleUpdateNote = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const title = form.title.value;
    const description = form.description.value;
    
    const newUpdatedNote = {email,description,title}
    // console.log(newNote)

    // send data to the server
    try{
        axiosSecure.put(`/notes/${_id}`, newUpdatedNote)
        .then(res => {
        // console.log(res.data)
          if(res.data.modifiedCount > 0){
              Swal.fire({
                  title: 'Success',
                  text: 'Notes Updated successfully',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                })
                refetch()
          }
          navigate('/dashboard/managePersonalNotes')
      })
    }
    catch (err) {
        Swal.fire({
            title: 'Error',
            text: 'Note updated error',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }
    
  }
  return (
    <div className='w-10/12 mx-auto py-7'>
        <Helmet>
            <title>Study Alliance | Update Note</title>
        </Helmet>
        <div className=' bg-base-200 rounded-xl p-10'>
            <h2 className='text-center text-4xl font-bold text-[#374151]'>Update Note</h2>
            <p className='text-center text-[#1B1A1AB3] w-9/12 mx-auto mt-8'>It is a dedicated area where student can update their note.</p>
        <form onSubmit={handleUpdateNote}>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Email</span>
                </div>
                <input type="email" readOnly defaultValue={email} placeholder="Enter Email" name='email' className="input input-bordered w-full" required />
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Title</span>
                </div>
                <input type="text" defaultValue={title} placeholder="Enter Title*" name='title' className="input input-bordered w-full" required />
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Description</span>
                </div>
                <textarea type="text" defaultValue={description} placeholder="Enter Description*" name='description' className="textarea" required></textarea>
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <input type="submit" value="Update Note" className="btn w-full font-bold border-white bg-[rgb(76,48,161)] text-white" />
        </div>
        </form>
        </div>
    </div>
  )
}