import React from 'react'
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// import ViewAllStudySessionCard from '../tutor/ViewAllStudySessionCard';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SessionCard from './../../components/SessionCard';

export default function AdminViewAllStudySession() {
 
  const axiosSecure = useAxiosSecure();
  const { refetch, data: session=[] } = useQuery({
    queryKey: ['session'],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/session`)
        return res.data;
    }
})
  
  return (
    <div>
    <Helmet>
        <title>Study Alliance | View All Study Session</title>
    </Helmet>
    
  {/* My All Session */}

  <div className='w-10/12 mx-auto py-7'>
  <h1 className='text-3xl font-bold text-center mb-6'>All Study Session</h1>
    <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-7'>
          {
            session.map((item) => <SessionCard key={item._id} item={item}></SessionCard>)
          }
          </div>
  </div>
  </div>
  )
}
