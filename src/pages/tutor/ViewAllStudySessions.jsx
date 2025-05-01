import React from 'react'
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useSession from '../../hooks/useSession';
import ViewAllStudySessionCard from './ViewAllStudySessionCard';
import SectionTitle2 from '../../shared/SectionTitle2';

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
   <SectionTitle2 subHeading='Session Details' heading='All Study Session'></SectionTitle2>
    <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mb-7'>
          {
            sessions.map((item) => <ViewAllStudySessionCard key={item._id} item={item}></ViewAllStudySessionCard>)
          }
          </div>
  </div>
  </div>
  )
}