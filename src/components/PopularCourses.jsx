import { Link } from "react-router-dom";

export default function PopularCourses() {
    return (
     <div className="w-10/12 mx-auto my-14">
      <h1 className="text-3xl font-bold text-center mb-9">Different Gaming Platforms<i className="fa-solid fa-gamepad ml-2 text-4xl"></i></h1>
         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* 1 */}
    <div className="card bg-[rgb(46,134,222,0.2)] shadow-xl text-center">
      <div className="card-body">
      <i class="fa-solid fa-desktop text-3xl"></i>
      <h2 className="text-xl font-bold">PC</h2>
      <p className="font-bold">PC gaming is a popular and versatile form of gaming, offering a wide range of experiences, from casual games to competitive esports.</p>
        <div className="card-actions justify-center">
        <Link to='/pcGameDetails'><button className="btn bg-[#0a3d62] text-white">More Details</button></Link>
      </div>
  </div>
</div>
{/* 2 */}
<div className="card bg-[rgb(170,111,219,0.2)] shadow-xl text-center">
  <div className="card-body">
  <i class="fa-solid fa-mobile-screen text-3xl"></i>
    <h2 className="text-xl font-bold">Mobile</h2>
    <p className="font-bold">Mobile gaming has become one of the most popular forms of gaming worldwide due to its accessibility, affordability, and versatility.</p>
    <div className="card-actions justify-center">
     <Link to='/mobileGameDetails'> <button className="btn bg-[#0a3d62] text-white">More Details</button></Link>
    </div>
  </div>
</div>
{/* 3 */}
<div className="card bg-[rgb(46,134,222,0.2)] shadow-xl text-center">
  <div className="card-body">
  <i class="fa-brands fa-playstation text-3xl"></i>
    <h2 className="text-xl font-bold">PlayStation</h2>
    <p className="font-bold">PlayStation is one of the most influential gaming platforms in the world, known for high-quality hardware, exclusive games, and a rich gaming experience.</p>
    <div className="card-actions justify-center">
      <Link to='/playStationGameDetails'><button className="btn bg-[#0a3d62] text-white">More Details</button></Link>
    </div>
  </div>
</div>
{/* 4 */}
<div className="card bg-[rgb(170,111,219,0.2)] shadow-xl text-center">
  <div className="card-body">
  <i className="fa-solid fa-vr-cardboard text-3xl"></i>
    <h2 className="text-xl font-bold">VR</h2>
    <p className="font-bold">VR gaming offers immersive experiences by placing players inside virtual worlds. It enabling users to interact with games in 360-degree spaces.</p>
    <div className="card-actions justify-center">
      <Link to='/vrGameDetails'><button className="btn bg-[#0a3d62] text-white">More Details</button></Link>
    </div>
  </div>
</div>
      </div>
     </div>
    )
  }