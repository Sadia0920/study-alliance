import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useSession from '../../hooks/useSession';

export default function CreateStudySession() {
  const {user} = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [registrationStartDate, setRegistrationStartDate] = useState(null);
  const [registrationEndDate, setRegistrationEndDate] = useState(null);
  const [classStartDate, setClassStartDate] = useState(null);
  const [classEndDate, setClassEndDate] = useState(null);
  const [, refetch] = useSession();
  const navigate = useNavigate()

  const handleAddStudySession = (event) => {

    event.preventDefault();
    const form = event.target;
    const sessionTitle = form.sessionTitle.value;
    const tutorName = form.tutorName.value;
    const tutorEmail = form.tutorEmail.value;
    const sessionDescription = form.sessionDescription.value;
    const registrationStartDate = form.registrationStartDate.value;
    const registrationEndDate = form.registrationEndDate.value;
    const classStartDate = form.classStartDate.value;
    const classEndDate = form.classEndDate.value;
    const sessionDuration = form.sessionDuration.value;
    const registrationFee = Number(form.registrationFee.value);
    const status = form.status.value;
    
    const newStudySession = {sessionTitle,tutorName,tutorEmail,sessionDescription,registrationStartDate,registrationEndDate,classStartDate,classEndDate,sessionDuration,registrationFee,status}
    // console.log(newStudySession)

    // send data to the server
    try{
        axiosSecure.post('/session', newStudySession)
        .then(res => {
        // console.log(res.data)
          if(res.data.insertedId){
              Swal.fire({
                  title: 'Success',
                  text: 'Session added successfully',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                })
                refetch()
          }
          form.reset()
          navigate('/dashboard/viewAllStudySessions')
      })
    }
    catch (err) {
        Swal.fire({
            title: 'Error',
            text: 'Session added error',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }
  }
  return (
    <div className='w-10/12 mx-auto py-7'>
        <Helmet>
            <title>Study Alliance | Create Study Session</title>
        </Helmet>
        <div className=' bg-base-200 rounded-xl p-10'>
            <h2 className='text-center text-4xl font-bold text-[#374151]'>Create Study Session</h2>
            <p className='text-center text-[#1B1A1AB3] w-9/12 mx-auto mt-8'>It is a dedicated area where tutor can create study session.</p>
        <form onSubmit={handleAddStudySession}>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Session Title</span>
                </div>
                <input type="text" placeholder="Enter Session Title*" name='sessionTitle' className="input input-bordered w-full" required />
                </label>
            </div>
        </div>
        <div className='md:flex justify-between items-center gap-5 mt-6'>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Tutor Name</span>
                </div>
                <input type="text" readOnly defaultValue={user.displayName}  placeholder="Enter Tutor Name" name='tutorName' className="input input-bordered w-full" required/>
                </label>
            </div>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Tutor Email</span>
                </div>
                <input type="email" readOnly defaultValue={user.email} placeholder="Enter Tutor Email" name='tutorEmail' className="input input-bordered w-full" required/>
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Session Description</span>
                </div>
                <textarea type="text" placeholder="Enter Session Description*" name='sessionDescription' className="textarea" required></textarea>
                </label>
            </div>
        </div>
        <div className='md:flex justify-between items-center gap-5 mt-6'>
        <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Registration Start Date</span>
                </div>
                <DatePicker
                    selected={registrationStartDate}
                    onChange={(date) => setRegistrationStartDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select a Registration Start Date"
                    name='registrationStartDate'
                    className='input input-bordered w-full'
                    required
                     />
                </label>
            </div>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Registration End Date</span>
                </div>
                <DatePicker
                    selected={registrationEndDate}
                    onChange={(date) => setRegistrationEndDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select a Registration End Date"
                    name='registrationEndDate'
                    className='input input-bordered w-full'
                    required
                     />
                </label>
            </div>
        </div>
        <div className='md:flex justify-between items-center gap-5 mt-6'>
        <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Class Start Date</span>
                </div>
                <DatePicker
                    selected={classStartDate}
                    onChange={(date) => setClassStartDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select a Class Start Date"
                    name='classStartDate'
                    className='input input-bordered w-full'
                    required
                     />
                </label>
            </div>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">class End Date</span>
                </div>
                <DatePicker
                    selected={classEndDate}
                    onChange={(date) => setClassEndDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select a Class End Date"
                    name='classEndDate'
                    className='input input-bordered w-full'
                    required
                     />
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Session Duration</span>
                </div>
                <input type="text" placeholder="Enter Session Duration*" name='sessionDuration' className="input input-bordered w-full" required />
                </label>
            </div>
        </div>
        <div className='md:flex justify-between items-center gap-5 mt-6'>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Registration Fee</span>
                </div>
                <input type="number" readOnly defaultValue={0}  placeholder="Enter Registration Fee*" name='registrationFee' className="input input-bordered w-full" required/>
                </label>
            </div>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Status</span>
                </div>
                <input type="text" readOnly defaultValue={'pending'} placeholder="Enter Status*" name='status' className="input input-bordered w-full" required/>
                </label>
            </div>
        </div>
        <div className='mt-6'>
        <input type="submit" value="Create Study Session" className="btn w-full font-bold border-white bg-[rgb(76,48,161)] text-white" />
        </div>
        </form>
        </div>
    </div>
  )
}
