import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

export default function useSession() {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext);
    const { refetch, data: sessions=[] } = useQuery({
        queryKey: ['sessions', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/sessions?email=${user.email}`)
            return res.data;
        }
    })
    return[sessions, refetch]
}