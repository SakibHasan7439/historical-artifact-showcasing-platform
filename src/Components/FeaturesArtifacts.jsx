import { useEffect, useState } from "react";
import { axiosSecure } from "./hooks/UseAxiosSecure";
import FeaturedArtifactInfoCard from "./FeaturedArtifactInfoCard";

const FeaturesArtifacts = () => {
    const [artifacts, setArtifacts] = useState([]);

    useEffect(()=>{
        fetchFeaturedData();
    }, []);

    const fetchFeaturedData = async() =>{
        const {data} = await axiosSecure.get('/features-artifacts');
        setArtifacts(data);
    }
    console.log(artifacts);

    return (
        <div className="p-4 lg:p-8 bg-[#c4a4843b]">
            <div className="max-w-7xl w-full mx-auto">
                <h1 className="font-playfair text-3xl text-center mb-6 md:mb-12">Featured Artifacts</h1>
                <div className="grid grid-cols-12 gap-4">
                    {
                        artifacts.map((artifact) =><FeaturedArtifactInfoCard
                            key={artifact._id}
                            artifact={artifact}>                      
                        </FeaturedArtifactInfoCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturesArtifacts;