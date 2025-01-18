import { useLoaderData, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

export default function SessionCardDetails() {
  
  const loadedSessionDetails = useLoaderData()
  
  const {_id,sessionTitle,tutorName,averageRating,sessionDescription,registrationStartDate,registrationEndDate,classStartTime,classEndDate,sessionDuration,registrationFee,reviews,bookNowStatus,additionalInfo} = loadedSessionDetails
  
  return (
    <div className='w-11/12 md:w-10/12 lg:w-7/12 mx-auto mt-36 mb-7'>
        <Helmet>
        <title>Study Alliance | Session Details</title>
        </Helmet>
       <div className="card bg-base-100 shadow-xl">
   <div className="card-body items-center text-center">
     <h2 className="card-title text-xl font-bold text-gray-950">{sessionTitle}</h2>
     <p className="text-lg font-semibold text-gray-800">Tutor Name :<span className='text-gray-500'>{tutorName}</span></p>
     <p className="text-lg font-semibold text-gray-800">Average Rating :<span className='text-gray-500'>{averageRating}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Session Description :<span className='text-gray-500'>{sessionDescription}</span></p>
    <p className="text-lg font-semibold text-gray-800">Registration Start Date :<span className='text-gray-500'>{registrationStartDate}</span></p>
    <p className="text-lg font-semibold text-gray-800">Registration End Date :<span className='text-gray-500'>{registrationEndDate}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Class Start Time :<span className='text-gray-500'>{classStartTime}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Class End Date :<span className='text-gray-500'>{classEndDate}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Session Duration :<span className='text-gray-500'>{sessionDuration}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Registration Fee :<span className='text-gray-500'>{registrationFee}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Book Now Status :<span className='text-gray-500'>{bookNowStatus}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Additional Info :<span className='text-gray-500'>{additionalInfo}</span></p>

</div>
</div>
  </div>
  )
}
