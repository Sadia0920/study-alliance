import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function AboutUs() {
  return (
    <div className='p-16 mt-32 mb-7 bg-[rgb(76,48,161,0.3)] w-10/12 mx-auto rounded-xl'>
      <Helmet>
        <title>Study Alliance | About Us</title>
      </Helmet>
      <h1 className='text-center text-3xl font-bold'>About Us</h1>
      <p className='text-lg mt-7 font-medium'>Welcome to Study Alliance, your all in one hub for academic success! We're here to bring students , tutors, and admin together in a seamless, collaaborative space designned to enhance learning experiences.
      <br></br>
      With Study Alliance, Weather yoy're a student seeking support , an admin managing resources, or a tutor providing guidance, we make it easy to connect , communicate, and thrive.
      <br></br>
Our platform offers a verity of tools and features, including personalized tutoring sessions, study group collaboration, progress tracking and admin management, all designed to foster a supportive and engaging learning environment. We believe in power of teamwork and are committed to helping students reach their full potential through tailored learning experiences. 
</p>
    </div>
  )
}