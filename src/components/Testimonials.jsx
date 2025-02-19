import React from 'react'

export default function Testimonials() {
  return (
    <div className="w-10/12 mx-auto my-14">
    <div className=" grid grid-cols-1 gap-6">
    {/* 1 */}
    <h2 className="text-xl font-bold text-center"><i className="fa-solid fa-people-group text-3xl mr-2"></i>Student Story</h2>
    <div className="card bg-[rgb(76,48,161,0.2)] shadow-xl text-left">
      <div className="card-body">
      <h4 className="text-lg text-black font-bold">"The best online learning platform!"</h4>
      <h5 className="text-black font-bold">Student Name - "John Doe"</h5>
      <p className="font-medium text-gray-800">"EduSphere helped me master AI fundamentals. The courses are engaging, and the instructors are highly knowledgeable. I landed my first internship thanks to this platform!"</p>
      </div>
      </div>
      <div className="card bg-[rgb(76,48,161,0.2)] shadow-xl text-left">
      <div className="card-body">
      <h4 className="text-lg text-black font-bold">"Flexible learning at its best!"</h4>
      <h5 className="text-black font-bold">Student Name - "Michael Smith"</h5>
      <p className="font-medium text-gray-800">"The ability to learn at my own pace with high-quality content is a game-changer. The premium courses are totally worth it!"</p>
  </div>
  </div>
  {/* 2 */}
    <h2 className="text-xl font-bold text-center"><i className="fa-solid fa-user text-3xl mr-2"></i>Tutor Story</h2>
  <div className="card bg-[rgb(76,48,161,0.2)] shadow-xl text-left">
      <div className="card-body">
      <h4 className="text-lg text-black font-bold">"A game-changer for teachers!"</h4>
      <h5 className="text-black font-bold">Tutor Name - "Sarah Lee "</h5>
      <p className="font-medium text-gray-800">
"As an instructor, I love how easy it is to create and manage courses. The support team is fantastic, and my students enjoy the interactive learning experience!"</p>
  </div>
</div>
</div>
    </div>
  )
}