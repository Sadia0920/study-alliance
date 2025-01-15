import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <div className='p-16 my-7 bg-[rgb(165,216,255,0.5)] w-10/12 mx-auto rounded-xl'>
      <Helmet>
        <title>Study Alliance | About</title>
      </Helmet>
      <h1 className='text-center text-3xl font-bold'>About</h1>
      <p className='text-lg mt-7 font-medium'>At VolunForce, we believe in the power of volunteering to transform communities and change lives. Our mission is to empower organizations with the tools they need to manage, engage, and grow their volunteer programs effortlessly.
      <br></br>
      With VolunForce, you can streamline every aspect of volunteer management—from scheduling shifts to tracking hours, communicating with teams, and reporting impact. Designed with simplicity and scalability in mind, our platform helps nonprofits, schools, businesses, and community groups focus on what truly matters: making a difference.
      <br></br>
      Whether you're coordinating hundreds of volunteers for a large event or building a close-knit team for ongoing projects, VolunForce ensures you have everything you need to inspire action, build connections, and achieve your goals.
<br></br>
<span className='text-xl font-bold'>Our Vision:</span>
<br></br>
To create a world where volunteer programs thrive, communities flourish, and every act of service has maximum impact.
<br></br>
<span className='text-xl font-bold'>Our Values:</span>
<br></br>
Empowerment: Giving organizations and volunteers the tools to succeed.
<br></br>
Innovation: Continuously improving to meet the evolving needs of our users.
<br></br>
Community: Strengthening bonds through collaboration and service.
</p>
    </div>
  )
}
