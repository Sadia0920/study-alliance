export default function ContactUs() {
    return (
      <div className="w-10/12 mx-auto bg-[rgb(222,238,251)] rounded-3xl py-10 px-5">
        <p className='text-center my-9 text-lg font-semibold text-gray-600'>Please reach out us for inquiries, support requests, or partnership opportunities</p>

        <div className="md:flex flex-cols items-center md:w-full lg:w-7/12 mx-auto gap-2">
        <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2 md:mt-0 mt-4">
        <i class="fa-solid fa-envelope text-gray-600"></i>
        <input type="text" className="grow" placeholder="Email" />
        </label>
        <button className="btn font-semibold text-lg md:mt-0 mt-4">Submit</button>
        </div>
        <p className="text-center mt-6">
            <span className="text-lg text-gray-800 font-bold">🔗 Follow us for updates & support:</span>
            <br></br>
            📘 <span className="text-gray-800 font-bold">Facebook:</span> <a href="https://www.facebook.com/sadia.afrin.khan.52" target="_blank" className="text-blue-600">https://www.facebook.com/sadia.afrin.khan.52</a>
            <br></br>
            🐦 <span className="text-gray-800 font-bold">Twitter:</span> <a href="https://x.com/sadiaafrin0920" target="_blank" className="text-blue-600">https://x.com/sadiaafrin0920</a>
            <br></br>
            📷 <span className="text-gray-800 font-bold">Instagram:</span> <a href="https://www.instagram.com/afrin9050/" target="_blank" className="text-blue-600">https://www.instagram.com/afrin9050/</a>
            <br></br>
            🎥 <span className="text-gray-800 font-bold">YouTube:</span> <a href="https://www.youtube.com/@SadiaAfrin-r9o" target="_blank" className="text-blue-600">https://www.youtube.com/@SadiaAfrin-r9o</a></p>

      </div>
    )
  }