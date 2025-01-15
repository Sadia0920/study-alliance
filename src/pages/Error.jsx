import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function Error() {
  return(
    <div className='py-52 my-7 text-center bg-[#EAE6FF] text-[rgb(51,51,51)] w-10/12 mx-auto rounded-xl'>
      <Helmet>
        <title>Study Alliance | Error</title>
      </Helmet>
      <h1 className=' text-4xl font-bold'>ERROR - 404</h1>
      <p className='text-lg mt-5 font-semibold'>Pages Are Not Found</p>
      <p className='text-lg mt-5 font-semibold'>Please go to - <Link to='/' className='border-b-2 text-[rgb(76,48,161)] border-[rgb(76,48,161)]'>Home</Link></p>
    </div>
  )
}