import React from 'react'
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../shared/SectionTitle';
import SessionCard from '../components/SessionCard';


export default function AllSession() {
  const axiosSecure = useAxiosSecure()
  const { refetch, data: sessions=[] } = useQuery({
      queryKey: ['sessions'],
      queryFn: async()=>{
          const res = await axiosSecure.get('/session')
          return res.data;
      }
  })
  return (
    <div className='pt-28'>
    <Helmet>
      <title>Study Alliance | All Session</title>
    </Helmet>
    <SectionTitle subHeading='Online Courses' heading='All study session'></SectionTitle>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-7'>
          {
            sessions.map((item,idx) => <SessionCard key={idx} item={item}></SessionCard>)
          }
          </div>
  </div>
  )
}
