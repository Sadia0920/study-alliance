import React from 'react'

export default function SectionTitle({heading, subHeading}) {
  return (
    <div className='text-center md:w-5/12 lg:w-3/12 mx-auto my-10'>
     
         <p className='text-[rgb(140,120,199)] mb-2'>...{subHeading}...</p>
         <h3 className='text-3xl uppercase border-y-2 py-4'>{heading}</h3>
       
    </div>
  )
}
