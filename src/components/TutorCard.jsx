import React from 'react'
import './SessionCard.css'

export default function TutorCard({data}) {
const {tutorName,sessionTitle}=data
  return (
    <div className='courseCard'>
      <h3 className="courseCard-title">{tutorName}</h3>
      <h3 className="courseCard-title">Subjects:</h3>
      {
        sessionTitle.map((sub,idx)=> <li key={idx}>{sub}</li>)
      }
    </div>

  )
}