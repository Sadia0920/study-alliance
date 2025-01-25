import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useTutor from '../hooks/useTutor';
import { Navigate, useLocation } from "react-router-dom"

export default function TutorRoute({childern}) {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    const [isTutor,isTutorLoading] = useTutor()
  
    if(loading || isTutorLoading){
        return <span className='block mx-auto loading loading-infinity loading-lg'></span>
      }
      if(user && isTutor){
          return children;
      }
      return (
        <Navigate to='/login' state={{from: location}} replace></Navigate>
      )
}