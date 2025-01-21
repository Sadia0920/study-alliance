import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function useUploadMaterials() {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext);
    const { refetch, data: materials=[] } = useQuery({
        queryKey: ['materials', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/materials?email=${user.email}`)
            return res.data;
        }
    })
    return[materials, refetch]
}
