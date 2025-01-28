import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://study-alliance-server-virid.vercel.app'
}) 

export default function useAxiosPublic() {
  return axiosPublic;
}