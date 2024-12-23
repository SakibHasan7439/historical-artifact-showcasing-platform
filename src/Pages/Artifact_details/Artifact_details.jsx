
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosSecure } from "../../Components/hooks/UseAxiosSecure";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Artifact_details = () => {
    const {user} = useContext(AuthContext);
    const [artifactData, setArtifactData] = useState({});
    const [isLiked, setIsLiked] = useState(false);
    const {id} = useParams();
    useEffect(()=>{  
        fetchArtifactData();
    }, [id]);

    const fetchArtifactData = async() =>{
        const {data} = await axiosSecure.get(`/artifact/${id}`)
        setArtifactData(data);
    }
    const { category, creation_time, discover_time, discoverer, historical_context, imageUrl, like_count, name, present_location, adder_email, _id } = artifactData;

    const handleStatusChange = async(_id, userEmail) =>{ 
        if(user?.email === adder_email) {
            return toast.error("Can't like your own item");
        }
        setIsLiked((previous)=> !previous);
        try {
            await axiosSecure.patch(`/update-like-count/${_id}`,{ userEmail, isLiked: !isLiked})

        } catch (error) {
            toast.error(error.message);
        }
    }


    console.log(isLiked);

    return (
        <div className="bg-[#151408c7] text-white p-8">
            <div className="max-w-5xl w-full bg-[#705e4c] text-lg mx-auto mb-6 md:p-4">
                <img className="h-[300px] lg:h-[600px] w-full mx-auto object-cover mb-4" src={imageUrl} alt="image" />
                <div className="md:w-7/12 mx-auto">
                    <h1 className="text-2xl mb-4 font-semibold lg:text-3xl text-center">{name}</h1>
                    <p><strong>Discoverer:</strong> {discoverer}</p>
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Creation Time:</strong> {creation_time}</p>
                    <p><strong>Discover Time:</strong> {discover_time}</p>
                    <p><strong>Present Location:</strong> {present_location}</p>
                    <p><strong>Historical Context:</strong> {historical_context}</p>
                    <div className="flex items-center">
                        <button onClick={()=>handleStatusChange(_id, user?.email)}>
                        {
                            isLiked ? 
                            <AiFillLike className="cursor-pointer text-3xl md:text-4xl"></AiFillLike> 
                            :<AiOutlineLike className="cursor-pointer text-3xl md:text-4xl"></AiOutlineLike>
                        }
                        </button>
                        <p className="pt-2"><strong>Total Like: </strong>{like_count}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Artifact_details;