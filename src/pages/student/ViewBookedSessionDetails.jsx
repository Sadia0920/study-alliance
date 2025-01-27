import { useLoaderData, Link, useNavigate, useParams, data } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import { useContext, useState } from 'react';
// import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import CreateReview from './CreateReview';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useReview from '../../hooks/useReview';

export default function ViewBookedSessionDetails() {
//   const { data: session=[] } = useQuery({
//     queryKey: ['session'],
//     queryFn: async()=>{
//         const res = await axiosSecure.get(`/session`)
//         return res.data;
//     }
// })
  
  const loadedViewSessionDetails = useLoaderData()
  const {_id,sessionTitle,tutorName,sessionDescription,registrationStartDate,registrationEndDate,classStartDate,classEndDate,sessionDuration,registrationFee,studySessionID} = loadedViewSessionDetails

  const [reviews,refetch] = useReview();
  
const loadedReviews = reviews.filter((id) => id.studySessionID == studySessionID)
refetch()
// console.log(loadedReviews)
  
  const currentDate = new Date();
 const endDate = new Date(registrationEndDate);
 const isOngoing = currentDate <= endDate;

  return (
    <div className='w-11/12 md:w-10/12 mx-auto my-7'>
        <Helmet>
        <title>Study Alliance | Booked Session Details</title>
        </Helmet>
       <div className="card bg-base-200 shadow-xl">
   <div className="card-body items-center text-center">
     <h2 className="card-title text-xl font-bold text-gray-950">{sessionTitle}</h2>
     <p className="text-lg font-semibold text-gray-800">Tutor Name :<span className='text-gray-500'>{tutorName}</span></p>
     {/* <p className="text-lg font-semibold text-gray-800">Average Rating :<span className='text-gray-500'>{averageRating}</span></p> */}
    <p className="text-lg mb-2 font-semibold text-gray-800">Session Description :<span className='text-gray-500'>{sessionDescription}</span></p>
    <p className="text-lg font-semibold text-gray-800">Registration Start Date :<span className='text-gray-500'>{registrationStartDate}</span></p>
    <p className="text-lg font-semibold text-gray-800">Registration End Date :<span className='text-gray-500'>{registrationEndDate}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Class Start Date :<span className='text-gray-500'>{classStartDate}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Class End Date :<span className='text-gray-500'>{classEndDate}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Session Duration :<span className='text-gray-500'>{sessionDuration}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Registration Fee :<span className='text-gray-500'>{registrationFee}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Reviews :</p>
    {
      loadedReviews.map((review,idx) => <li key={idx} className='text-gray-500'>{review.review}</li>)
    }
    {isOngoing ? (
        <p className="text-lg mb-2 font-semibold text-gray-800">Registration Status: <strong className='text-green-600'>Ongoing</strong></p>
      ) : (
        <p className="text-lg mb-2 font-semibold text-gray-800">Registration Status: <strong className='text-red-600'>Closed</strong></p>
    )}
   
    {/* <p className="text-lg mb-2 font-semibold text-gray-800">Additional Info :<span className='text-gray-500'>{additionalInfo}</span></p> */}
    <div className="card-actions">
      {/* {
        registrationFee == 0 ? (
          <button onClick={handleBookedSession} disabled={isOngoing? false : true} className="btn bg-green-800 text-white">{bookNowStatus}</button>
        )
        :
        (
          <Link to='/paymentPage' ><button onClick={handleBookedSession} disabled={isOngoing? false : true}className="btn bg-green-800 text-white">{bookNowStatus}</button></Link>
        )
      }
       */}
   </div>

</div>
        </div>
        <CreateReview loadedViewSessionDetails={loadedViewSessionDetails}></CreateReview>
  </div>
  )
}


