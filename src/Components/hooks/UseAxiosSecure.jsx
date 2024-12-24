import axios from "axios";
import { useEffect } from "react";


const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () =>{

    useEffect(()=>{
        axiosSecure.interceptors.response.use(response =>{
            return response;
        }, error =>{
            if(error.response?.status === 401 || error.response?.status ===403){
                console.log("get out from my site");
            }
            return Promise.reject(error);
        })
    },[]);

    return axiosSecure;
}

export default useAxiosSecure;