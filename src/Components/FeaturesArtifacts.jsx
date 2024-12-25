import { useEffect, useState } from "react";
import useAxiosSecure from "./hooks/UseAxiosSecure";
import FeaturedArtifactInfoCard from "./FeaturedArtifactInfoCard";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter"

const FeaturesArtifacts = () => {
    const [artifacts, setArtifacts] = useState([]);
    const axiosSecure = useAxiosSecure();

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
            
            <div className="max-w-7xl w-full mx-auto mb-8 md:mb-12">
                <h1 className="font-playfair h-8 text-3xl text-center mb-6 md:my-12">
                <Typewriter 
                    words={['Featured Artifacts']}
                    loop={true}
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}>
                </Typewriter></h1>
                <div className="grid grid-cols-12 mb-4 md:mb-6 gap-4">
                    {
                        artifacts.map((artifact) =><FeaturedArtifactInfoCard
                            key={artifact._id}
                            artifact={artifact}>                      
                        </FeaturedArtifactInfoCard>)
                    }
                </div>
                <Link to={"/all-artifacts"} className="text-xl btn-anime font-playfair hover:bg-[#756453] md:text-2xl px-4 py-2 rounded-md bg-[#C4A484] text-white shadow-md shadow-slate-800">
                <Typewriter 
                    words={['See all Artifacts']}
                    loop={true}
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}>
                </Typewriter>
                </Link>
            </div>
        </div>
    );
};

export default FeaturesArtifacts;