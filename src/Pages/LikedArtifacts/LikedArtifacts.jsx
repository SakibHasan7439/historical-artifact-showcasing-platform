import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Components/hooks/UseAxiosSecure";
import Lottie from "lottie-react";
import noData from "../../assets/noData.json"
import LikedArtifactCard from "../../Components/LikedArtifactCard";

const LikedArtifacts = () => {
    const [artifacts, setArtifacts] = useState([]);
    const axiosSecure = useAxiosSecure();

    const {user} = useContext(AuthContext);
    useEffect(()=>{
        fetchLikedArtifacts()
    }, [user?.email]);

    const fetchLikedArtifacts = async() =>{
        const {data} = await axiosSecure.get(`/liked-artifacts/${user?.email}`)
        setArtifacts(data);
    }
    
    console.log(artifacts);
    return (
        <div>
            {
                artifacts.length === 0 ?
                <Lottie className="w-[80%] md:1/2 lg:w-1/4 mx-auto" animationData={noData}></Lottie> :
                <div className="max-w-7xl w-full mt-6 mb-6 md:mt-12 mx-auto grid gap-4 grid-cols-12">
                    {
                        artifacts.map((artifact) => <LikedArtifactCard 
                            key={artifact._id}
                            artifact={artifact}>                            
                        </LikedArtifactCard>)
                    }
                </div>
            }
        </div>
    );
};

export default LikedArtifacts;