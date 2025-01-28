import { useLoaderData, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from './../provider/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAdmin from '../hooks/useAdmin';
import useTutor from '../hooks/useTutor';
import useReview from '../hooks/useReview';

export default function SessionCardDetails() {
  
  const [isAdmin] = useAdmin();
  const [isTutor] = useTutor();
  const loadedSessionDetails = useLoaderData()
  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {_id,sessionTitle,tutorName,tutorEmail,averageRating,sessionDescription,registrationStartDate,registrationEndDate,classStartDate,classEndDate,sessionDuration,registrationFee,bookNowStatus,} = loadedSessionDetails

  const [reviews,refetch] = useReview();
  const loadedReviews = reviews.filter((id) => id.studySessionID == _id)
  refetch();

 const currentDate = new Date();
 const endDate = new Date(registrationEndDate);
 const isOngoing = currentDate <= endDate;
 const isButtonDisabled = (!isOngoing || isAdmin || isTutor)

 const handleBookedSession = session => {
  if(user && user.email){
    const bookedSession = {
      studySessionID: _id,
      studentEmail: user.email,
      sessionTitle,
      tutorName,
      tutorEmail,
      // averageRating,
      sessionDescription,
      registrationStartDate,
      registrationEndDate,
      classStartDate,
      classEndDate,
      sessionDuration,
      registrationFee,
    }

    // send data to the server
       try{
           axiosSecure.post('/bookedSession', bookedSession)
           .then(res => {
          //  console.log(res.data)
             if(res.data.insertedId){
                 Swal.fire({
                     title: 'Success',
                     text: 'Booked Session successfully',
                     icon: 'success',
                     confirmButtonText: 'Ok'
                   })
             }
             navigate('/dashboard/viewBookedSession')
         })
       }
       catch (err) {
           Swal.fire({
               title: 'Error',
               text: 'Booked Session error',
               icon: 'error',
               confirmButtonText: 'Ok'
             })
       }
  }
 }
  
  return (
    <div className='w-11/12 md:w-10/12 lg:w-7/12 mx-auto mt-36 mb-7'>
        <Helmet>
        <title>Study Alliance | Session Details</title>
        </Helmet>
       <div className="card bg-base-100 shadow-xl">
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
   
    <div className="card-actions">
      {
        registrationFee == 0 ? (
          <button onClick={handleBookedSession}  disabled={isButtonDisabled} className="btn bg-[rgb(76,48,161)] text-white">{isOngoing? 
          'Book Now' : 'Registration Closed'}</button>
        )
        :
        (
          <Link to={`/paymentPage/${_id}`}  ><button disabled={isButtonDisabled} className="btn bg-[rgb(76,48,161)] text-white">{isOngoing? 'Book Now' : 'Registration Closed'}</button></Link>
        )
      }
      
   </div>

</div>
</div>
  </div>
  )
}
