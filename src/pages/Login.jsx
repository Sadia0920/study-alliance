import { NavLink, Link, useNavigate } from 'react-router-dom'
import Lottie from "lottie-react";
import loginLottieData from "../assets/animation/Animation-4.json"
import React, { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
// import axios from 'axios';

export default function Login() {
  const {signInUser,signInWithGoogle,setUser} = useContext(AuthContext);
  const navigate = useNavigate()
  const [showPassword,setShowPassword]=useState(false)

  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {email,password}
    // console.log(user);

    // SignInUser
    signInUser(email,password)
    .then(result => {
      // console.log(result.user)
      setUser(result.user)
      Swal.fire({
        title: 'Success',
        text: 'Login successfully',
        icon: 'success',
        confirmButtonText: 'Done'
      })
      navigate('/')
      form.reset()
    })
    .catch(error => {
      // console.log(error.message)
      setUser(null)
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    })
  }
  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then(result => {
      // console.log(result.user)
      setUser(result.user)
      Swal.fire({
        title: 'Success',
        text: 'Login successfully',
        icon: 'success',
        confirmButtonText: 'Done'
      })
      navigate('/')
    })
    .catch(error => {
      // console.log(error)
      setUser(null)
    })
  }
  
  return (
    <div className='my-7'>
    <Helmet>
      <title>VolunForce | Login</title>
    </Helmet>
    <div className="hero">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <Lottie animationData={loginLottieData}></Lottie> 
    </div>
    <div className="card w-full">
    <h1 className="text-3xl text-center pt-7 font-bold">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" placeholder="Email*" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword?'text':'password'}   placeholder="password*" name='password' className="input input-bordered" required />
          <a onClick={()=>setShowPassword(!showPassword)} className="btn btn-xs text-lg absolute mt-12 ml-[280px] md:ml-[480px] lg:ml-[420px]">{showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</a>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[rgb(76,48,161)] text-white">Login</button>
          <p className='text-center mt-4'>Don't have an account? <NavLink to='/register' className='text-[rgb(76,48,161)]'>Register</NavLink></p>
        </div>
      </form>
      <div className="divider w-11/12 mx-auto">OR</div>
      <button onClick={handleGoogleLogin} className="btn bg-[rgb(76,48,161)] text-white w-11/12 mx-auto mt-6"><i className="fa-brands fa-google"></i>Google Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

