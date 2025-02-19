import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'

export default function PremiumAccess() {
  return (
    <div className="w-10/12 mx-auto my-14">
    <div
  className="hero h-[1000px] lg:h-[550px]"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/93JZK48/premium-Access.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-neutral-content text-center">
    <div>
      <p className="mb-6 w-10/12 lg:w-7/12 mx-auto">
      Premium Access is the ultimate upgrade for dedicated users who want to elevate their experience on the learning. By subscribing to Premium Access, you can unlock a range of exclusive features and benefits designed to provide deeper insights, enhanced interaction, and a superior browsing experience.
      </p>
      <div className='lg:flex justify-between w-11/12 md:w-9/12 mx-auto  gap-5'>
      <div className="card  image-full h-40 shadow-xl lg:mb-0 mb-36">
  <figure className='h-72 w-full'>
    <img
      src={card1}
      alt="Card"
      className='w-full' />
  </figure>
  <div className="card-body">
    <h2 className="text-lg md:text-xl font-bold">Ad-Free Experience</h2>
    <p className='w-52 mx-auto md:w-80 '>It removes all advertisements from the website, providing users with a clean and uninterrupted browsing experience.</p>
    <div className="card-actions justify-end">
      
      <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Subscribe Now - $50</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-gray-800">Ad-Free Experience</h3>
    <p className="py-4 text-gray-800">For buy this Premium Access you should pay $50</p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">OK</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
<div className="card bg-base-100 image-full shadow-xl">
  <figure className='md:h-72 h-92 w-full'>
    <img
      src={card2}
      alt="Card"
      className='w-full' />
  </figure>
  <div className="card-body">
    <h2 className="text-lg md:text-xl font-bold">Downloadable Study Materials</h2>
    <p className='w-52 mx-auto md:w-80'>It provides access to exclusive PDF notes, eBooks, worksheets, and practice tests for offline learning.</p>
    <div className="card-actions justify-end">
      
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Subscribe Now - $100</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-gray-800">Downloadable Study Materials</h3>
    <p className="py-4 text-gray-800">For buy this Premium Access you should pay $100</p>
    <div className="modal-action">
      <form method="dialog">
        
        <button className="btn">OK</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}