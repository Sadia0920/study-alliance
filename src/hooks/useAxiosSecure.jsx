import axios from "axios";
import {useNavigate} from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'

export const axiosSecure = axios.create({
    baseURL: 'https://study-alliance-server-virid.vercel.app'
}) 

export default function useAxiosSecure() {
  const navigate = useNavigate()
  const {signOutUser} = useContext(AuthContext)
  //request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token');
    // console.log('request stopped by interceptors', token)
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },function(error){
    return Promise.reject(error);
  });

  //intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(function(response){
    return response;
  },async(error)=>{
    const status = error.response.status;
    // console.log('status error in the interceptor', status)
    if(status === 401 || sastus === 403){
      await signOutUser();
      navigate('/login')
    }
    return Promise.reject(error);
  })
  return axiosSecure;
}
