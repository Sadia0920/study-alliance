import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useSession from '../../hooks/useSession';

export default function UpdateSession() {
  const loadData = useLoaderData()
  const {_id,registrationFee} = loadData;
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useSession();

  const handleUpdateFee = (event) => {
    event.preventDefault();
    const form = event.target;
    const fee = form.registrationFee.value
    const registrationFee = parseFloat(fee);
    const newUpdatedFee = {registrationFee}
    // console.log(newUpdatedFee)

    // send data to the server
    try{
        axiosSecure.put(`/session/${_id}`, newUpdatedFee)
        .then(res => {
        console.log(res.data)
          if(res.data.modifiedCount > 0){
              Swal.fire({
                  title: 'Success',
                  text: 'Fee Updated successfully',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                })
                refetch()
          }
          navigate('/dashboard/adminViewAllStudySession')
      })
    }
    catch (err) {
        Swal.fire({
            title: 'Error',
            text: 'Fee updated error',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }
    
  }
  return (
    <div className='w-10/12 mx-auto py-7'>
        <Helmet>
            <title>Study Alliance | Update Fee and Status</title>
        </Helmet>
        <div className=' bg-base-200 rounded-xl p-10'>
            <h2 className='text-center text-4xl font-bold text-[#374151]'>Update Registration Fee</h2>
        <form onSubmit={handleUpdateFee}>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Registration Fee</span>
                </div>
                <input type="text" defaultValue={registrationFee} placeholder="Enter The Amount*" name='registrationFee' className="input input-bordered w-full" required />
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <input type="submit" value="Update Registration Fee" className="btn w-full font-bold border-white bg-[rgb(76,48,161)] text-white" />
        </div>
        </form>
        </div>
    </div>
  )
}
