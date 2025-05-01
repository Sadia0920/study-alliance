import React from 'react'

export default function SectionTitle2({heading, subHeading}) {
  return (
    <div className='text-center md:w-6/12 lg:w-4/12 mx-auto my-10'>
     
         <p className='text-[rgb(140,120,199)] mb-2'>...{subHeading}...</p>
         <h3 className='text-xl uppercase border-y-2 py-4'>{heading}</h3>
         </div>
  )
}
