import React from 'react'
import '../../components/SessionCard.css'
import { Link } from 'react-router-dom';

export default function ViewAllStudySessionCard({item}) {
const {_id,sessionTitle,sessionDescription,tutorName,registrationEndDate,status} = item;

const currentDate = new Date();
 const endDate = new Date(registrationEndDate);
 const isOngoing = currentDate <= endDate;
  return (
    <div className="courseCard">
    <h3 className="courseCard-title">{sessionTitle}</h3>
    <p className="text-lg font-semibold">Tutor Name: <span className="courseCard-description">{tutorName}</span></p>
    <p className="courseCard-description">{sessionDescription}</p>
    <div className="courseCard-header">
    {isOngoing ? (
        <p>Registration Status: <strong className='text-green-600'>Ongoing</strong></p>
      ) : (
        <p>Registration Status: <strong className='text-red-600'>Closed</strong></p>
    )}
    </div>
    <p className="courseCard-header">Status: <strong>{status}</strong></p>
    <Link to={`/dashboard/uploadMaterials/${_id}`}><p className='btn border-0 bg-transparent border-y-2 border-[rgb(76,48,161)] text-[rgb(76,48,161)]'>Upload Materials</p></Link>
  </div>

  )
}