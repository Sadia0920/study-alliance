import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// import useAxiosSecure from '../../hooks/useAxiosSecure';
import useBookedSession from '../../hooks/useBookedSession';
import BookedSessionCard from '../../components/BookedSessionCard';

export default function ViewBookedSession() {
//   const axiosSecure = useAxiosSecure();
  const [bookedSession,refetch] = useBookedSession();
  
  return (
    <div>
    <Helmet>
        <title>Study Alliance | View Booked Session</title>
    </Helmet>
    
  {/* My Booked Session */}

  <div className='w-10/12 mx-auto py-7'>
  <h1 className='text-3xl font-bold text-center mb-6'>Booked Session</h1>
    <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-7'>
          {
            bookedSession.map((item) => <BookedSessionCard key={item._id} item={item}></BookedSessionCard>)
          }
          </div>
  </div>
  </div>
  )
}