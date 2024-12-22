import { useEffect, useState } from "react";
import { axiosSecure } from "../../Components/hooks/UseAxiosSecure";
import ArtifactCard from "../../Components/ArtifactCard";

const AllArtifacts = () => {
    const [artifacts, setArtifacts] = useState([]);
    const [search, setSearch] = useState('');
    
    useEffect(()=>{
        const fetchAllData = async () =>{
            const { data } = await axiosSecure.get(`/all-jobs`)
            setArtifacts(data);
        };
        fetchAllData();
    }, []);
    console.log(artifacts);
    return (
        <div className="max-w-7xl w-full mx-auto">
            <div className="md:w-[60%] flex items-center mx-auto mb-6 lg:mb-12">
                <input onChange={(e)=> setSearch(e.target.value)} className="px-5 w-full py-3 rounded-md border-2 mr-2" type="search" />
                <button className="px-5 py-3 rounded-md hover:bg-[#967e67] bg-[#C4A484]">Search</button>
            </div>
            <div className="grid grid-cols-12 gap-4">
                {
                    artifacts.map((artifact) => <ArtifactCard 
                    key={artifact._id}
                    artifact={artifact}
                    >
                    </ArtifactCard>)
                }
            </div>
        </div>
    );
};

export default AllArtifacts;