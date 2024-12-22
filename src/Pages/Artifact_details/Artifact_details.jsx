
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosSecure } from "../../Components/hooks/UseAxiosSecure";

const Artifact_details = () => {
    const [artifactData, setArtifactData] = useState({});
    const {id} = useParams();
    useEffect(()=>{  
        fetchArtifactData();
    }, [id]);

    const fetchArtifactData = async() =>{
        const {data} = await axiosSecure.get(`/artifact/${id}`)
        setArtifactData(data);
    }
    const { category, creation_time, discover_time, discoverer, historical_context, imageUrl, like_count, name, present_location } = artifactData;
    return (
        <div className="bg-[#151408c7] text-white p-8">
            <div className="max-w-5xl w-full bg-[#705e4c] text-lg mx-auto mb-6 md:p-4">
                <img className="h-[300px]lg:h-[600px] w-full mx-auto object-cover mb-4" src={imageUrl} alt="image" />
                <div className="md:w-7/12 mx-auto">
                    <h1 className="text-2xl mb-4 font-semibold lg:text-3xl text-center">{name}</h1>
                    <p><strong>Discoverer:</strong> {discoverer}</p>
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Creation Time:</strong> {creation_time}</p>
                    <p><strong>Discover Time:</strong> {discover_time}</p>
                    <p><strong>Present Location:</strong> {present_location}</p>
                    <p><strong>Historical Context:</strong> {historical_context}</p>
                    <p><strong>Total Like: </strong>{like_count}</p>
                </div>
            </div>
        </div>
    );
};

export default Artifact_details;