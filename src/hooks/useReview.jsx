import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export default function useReview() {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: reviews=[] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/reviews')
            return res.data;
        }
    })
    return[reviews, refetch]
}