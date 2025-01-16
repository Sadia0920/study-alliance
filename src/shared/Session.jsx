import React, { useEffect, useState } from 'react'
import TutorCard from '../components/TutorCard';

const Session = () => {
    const [tutors, setTutors] = useState([]);
  
    useEffect(() => {
      // Fetch data from review.json
      const fetchTutors = async () => {
        try {
          const response = await fetch('/session details.json'); // Update the path if necessary
          const courses = await response.json();
  
          // Extract unique tutors
          const uniqueTutors = courses.reduce((acc, course) => {
            const isDuplicate = acc.find(tutor => tutor.tutorName === course.tutor.tutorName);
            if (!isDuplicate) {
              acc.push(course.tutor);
            }
            return acc;
          }, []);
  
          setTutors(uniqueTutors);
        } catch (error) {
          console.error('Error fetching tutors:', error);
        }
      };
  
      fetchTutors();
    }, []);
  
    return (
      <div className='card'>
        <h2>Meet Our Tutors</h2>
        <div>
          {tutors.map((tutor, index) => (
            <TutorCard key={index} tutor={tutor} />
          ))}
        </div>
      </div>
    );
  };
  export default Session;
