import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import Lottie from "lottie-react";
import loginLottieData from "../assets/animation/Animation-4.json"
import React, { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../hooks/useAxiosPublic';

export default function Login() {
  const {signInUser,signInWithGoogle,setUser,signInWithGithub} = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"
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
      navigate(from, {replace: true});
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
      setUser(result.user)
      // console.log(result.user)
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        role: 'student'
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
        // console.log(res.data)
        Swal.fire({
          title: 'Success',
          text: 'Login With Google Successfully',
          icon: 'success',
          confirmButtonText: 'Done'
        })
        navigate(from, {replace: true});
        // navigate('/');
      })
    })
    .catch(error => {
      // console.log(error)
      setUser(null)
    })
  }

  const handleGithubLogin = () => {
    signInWithGithub()
   .then(result => {
      // console.log(result.user)
      setUser(result.user)
      // console.log(result.user)
      Swal.fire({
        title: 'Success',
        text: 'Login With Github Successfully',
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
    <div className='py-10'>
    <Helmet>
      <title>Study Alliance | Login</title>
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
            <span className="label-text text-gray-500 font-semi-bold">Your Email</span>
          </label>
          <input type="email" placeholder="Email*" name='email' className="input input-bordered text-black" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text text-gray-500 font-semi-bold">Password</span>
          </label>
          <input type={showPassword?'text':'password'}   placeholder="password*" name='password' className="input input-bordered text-black" required />
          <a onClick={()=>setShowPassword(!showPassword)} className="btn btn-xs text-lg absolute mt-12 ml-[280px] md:ml-[620px] lg:ml-[410px]">{showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</a>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-gray-500">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[rgb(76,48,161)] text-white hover:text-black hover:bg-[rgb(212,208,229)]">Login</button>
          <p className='text-center mt-4'>Don't have an account? <NavLink to='/register' className='text-[rgb(149,119,237)] border-[rgb(149,119,237)] border-b-2'>Register</NavLink></p>
        </div>
      </form>
      <div className="divider w-11/12 mx-auto">OR</div>
      <button onClick={handleGoogleLogin} className="btn bg-[rgb(76,48,161)] text-white hover:text-black hover:bg-[rgb(212,208,229)] w-11/12 mx-auto mt-6"><i className="fa-brands fa-google"></i>Google Login</button>
      <button onClick={handleGithubLogin} className="btn bg-[rgb(76,48,161)] text-white hover:text-black hover:bg-[rgb(212,208,229)] w-11/12 mx-auto mt-6"><i className="fa-brands fa-github"></i>Github Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

