import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
import loadingLottieData from "../assets/loading.json"
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex items-center justify-center flex-col mb-6 lg:mb-12">
            <Lottie className="h-[400px]" 
                animationData={loadingLottieData}>
            </Lottie>
            <h2 className="text-3xl font-semibold">Loading...</h2>
        </div>
    }

    if(user) {
        return children;
    }
    return <Navigate to={"/signin"} state={location?.pathname}></Navigate>;
};

export default PrivateRoute;