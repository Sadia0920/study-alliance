import React from 'react'
import './SessionCard.css'
import { Link } from 'react-router-dom';

export default function SessionCard({item}) {
const {sessionTitle,sessionDescription,registrationEndDate,registrationStartDate} = item;
const currentDate = new Date();
 const endDate = new Date(registrationEndDate);
//  const startDate = new Date(registrationStartDate);
 const isOngoing = currentDate <= endDate;
  return (
    <div className="courseCard">
    <h3 className="courseCard-title">{sessionTitle}</h3>
    <p className="courseCard-description">{sessionDescription}</p>
    <div className="courseCard-header">
    {isOngoing ? (
        <p>Registration Status: <strong className='text-green-600'>Ongoing</strong></p>
      ) : (
        <p>Registration Status: <strong className='text-red-600'>Closed</strong></p>
    )}
    </div>
    <Link><p className='btn border-0 bg-transparent border-y-2 border-[rgb(76,48,161)] text-[rgb(76,48,161)]'>Read More</p></Link>
  </div>
  )
}