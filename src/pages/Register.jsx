import { NavLink, Link, useNavigate } from 'react-router-dom'
import Lottie from "lottie-react";
import registerLottieData from "../assets/animation/Animation-4.json"
import React, { useContext, useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

export default function Register() {
  const {createUser,setUser,updateUserInfo} = useContext(AuthContext);
  const navigate = useNavigate()
  const [showPassword,setShowPassword]=useState(false)
  const [errorMessage,setErrorMessage]=useState('')

  const handleCreateUser = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const role = form.role.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = {name,photo,role,email,password}
  // console.log(newUser);

    setErrorMessage('')

     const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

     if(!regex.test(password)){
      setErrorMessage('Please give a valid password with at lease one Uppercase, one Lowercase and length must be 6 character or more.')
      Swal.fire({
        title: 'Error',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }

    // CreateUser
    createUser(email,password)
    .then(result => {
      setUser(result.user)
      form.reset();
      navigate('/')
      Swal.fire({
        title: 'Success',
        text: 'Register Successfully',
        icon: 'success',
        confirmButtonText: 'Done'
      })
      // UpdateUser
    const profile = {
      displayName: name,
      photoURL: photo
    }
    updateUserInfo(profile)
    .then((res)=>{
      console.log(res.user)
    })
    .catch(error => {
      setErrorMessage(error.message)
    })
    })
    .catch(error => {
      // console.log(error.message)
      setErrorMessage(error.message)
      setUser(null)
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    })
  }
  return (
    <div className='py-10'>
    <Helmet>
      <title>Study Alliance | Register</title>
    </Helmet>
    <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <Lottie animationData={registerLottieData}></Lottie>
    </div>
    <div className="card w-full">
    <h1 className="text-3xl text-center pt-7 font-bold">Register now!</h1>
      <form onSubmit={handleCreateUser} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name*" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" placeholder="Your Photo URL*" name='photo' className="input input-bordered" required />
        </div>

        <div className="form-control"> 
        <label className="label">
            <span className="label-text">Role</span>
          </label> 
        <select className="select select-bordered w-full" name='role' required type='text'>
        <option disabled selected>select role</option>
        <option>Student</option>
        <option>Tutor</option>
        <option>Admin</option>
        </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email*" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword?'text':'password'}  placeholder="Password*" name='password' className="input input-bordered" required />
          <a onClick={()=>setShowPassword(!showPassword)} className="btn btn-xs text-lg absolute mt-12 ml-[280px] md:ml-[480px] lg:ml-[420px]">{showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</a>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-[rgb(76,48,161)]">Register</button>
          <p className='text-center mt-4'>Already have an account? <NavLink to='/login' className='text-[rgb(76,48,161)]'>Login</NavLink></p>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

