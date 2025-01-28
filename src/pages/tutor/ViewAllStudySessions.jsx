import React from 'react'
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useSession from '../../hooks/useSession';
import ViewAllStudySessionCard from './ViewAllStudySessionCard';

export default function ViewAllStudySessions() {
  const [sessions,refetch] = useSession();
  // console.log(sessions)
  
  return (
    <div>
    <Helmet>
        <title>Study Alliance | View All Study Session</title>
    </Helmet>
    
  {/* My All Session */}

  <div className='w-10/12 mx-auto py-7'>
  <h1 className='text-3xl font-bold text-center mb-6'>All Study Session</h1>
    <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mb-7'>
          {
            sessions.map((item) => <ViewAllStudySessionCard key={item._id} item={item}></ViewAllStudySessionCard>)
          }
          </div>
  </div>
  </div>
  )
}