import axios from "axios";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})


const useAxiosSecure = () =>{
    const { userSignOut } = useContext(AuthContext);

    useEffect(()=>{
        axiosSecure.interceptors.response.use(response =>{
            return response;
        }, async error =>{
            if(error.response?.status === 401 || error.response?.status === 403){
                console.log("get out from my site");
                userSignOut()
                .then(() =>{
                    toast.success("signed out");
                })
                .catch((err) =>{
                    toast.error(err.message);
                })
            }
            return Promise.reject(error);
        })
    },[userSignOut]);
    

    return axiosSecure;
}

export default useAxiosSecure;