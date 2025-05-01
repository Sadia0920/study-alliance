import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import useBookedSession from '../../hooks/useBookedSession';
import BookedSessionCard from '../../components/BookedSessionCard';
import SectionTitle2 from '../../shared/SectionTitle2';

export default function ViewBookedSession() {

  const [bookedSession,refetch] = useBookedSession();
  
  return (
    <div>
    <Helmet>
        <title>Study Alliance | View Booked Session</title>
    </Helmet>
    
  {/* My Booked Session */}

  <div className='w-10/12 mx-auto py-7'>
   <SectionTitle2 subHeading='view booled list' heading='Booked Session'></SectionTitle2>
  {/* <h1 className='text-3xl font-bold text-center mb-6'>Booked Session</h1> */}
    <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mb-7'>
          {
            bookedSession.map((item) => <BookedSessionCard key={item._id} item={item}></BookedSessionCard>)
          }
          </div>
  </div>
  </div>
  )
}