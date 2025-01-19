import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';

export default function CreateReview({loadedViewSessionDetails}) {
   const{studySessionID}=loadedViewSessionDetails
   const {user} = useContext(AuthContext);
   const axiosSecure = useAxiosSecure()
  const handleCreateReview = (event) => {
   
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const rate = form.rate.value;
    const rating = Number(rate)
    const newData = {
        studySessionID,
        review,
        rating
    }
    // console.log(newData)

    // send data to the server
    try{
        axiosSecure.post('/reviews', newData)
        .then(res => {
        console.log(res.data)
          if(res.data.insertedId){
              Swal.fire({
                  title: 'Success',
                  text: 'Reviews Created successfully',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                })
                // refetch()
          }
          form.reset()
      })
    }
    catch (err) {
        console.log(err)
        Swal.fire({
            title: 'Error',
            text: 'Review Created error',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }
  }
  return (
    <div className='w-full mx-auto py-7'>
        <div className=' bg-base-200 rounded-xl p-10'>
            <h2 className='text-center text-4xl font-bold text-[#374151]'>Create review</h2>
            <p className='text-center text-[#1B1A1AB3] w-9/12 mx-auto mt-8'>It is a dedicated area where student can give a review and rating.</p>
        <form onSubmit={handleCreateReview}>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Review</span>
                </div>
                <input type="text" placeholder="Enter Review*" name='review' className="input input-bordered w-full" />
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Rating</span>
                </div>
                <textarea type="number" placeholder="Enter Rating*" name='rate' className="textarea" required></textarea>
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <input type="submit" value="Create review" className="btn w-full font-bold border-white bg-[rgb(76,48,161)] text-white" />
        </div>
        </form>
        </div>
    </div>
  )
}
