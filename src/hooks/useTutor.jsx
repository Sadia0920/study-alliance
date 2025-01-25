import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

export default function useTutor() {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
  const {data: isTutor,isPending: isTutorLoading} = useQuery({
    queryKey: [user?.email,'isTutor'],
    queryFn: async() => {
        const res = await axiosSecure.get(`/users/tutor/${user.email}`);
        // console.log(res.data);
        return res.data?.tutor;
    }
  })
  return [isTutor,isTutorLoading]
}
