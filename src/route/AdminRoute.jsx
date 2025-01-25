import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from "react-router-dom"

export default function AdminRoute({childern}) {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    const [isAdmin,isAdminLoading] = useAdmin()
  
    if(loading || isAdminLoading){
        return <span className='block mx-auto loading loading-infinity loading-lg'></span>
      }
      if(user && isAdmin){
          return children;
      }
      return (
        <Navigate to='/login' state={{from: location}} replace></Navigate>
      )
}
