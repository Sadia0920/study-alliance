import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function useBookedSession() {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext);
    const { refetch, data: bookedSession=[] } = useQuery({
        queryKey: ['bookedSession', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/bookedSession?email=${user.email}`)
            return res.data;
        }
    })
    return[bookedSession, refetch]
}