import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function useNote() {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext);
    const { refetch, data: note=[] } = useQuery({
        queryKey: ['note', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/notes?email=${user.email}`)
            return res.data;
        }
    })
    return[note, refetch]
}
