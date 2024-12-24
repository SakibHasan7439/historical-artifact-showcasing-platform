import { useEffect, useState } from "react";
import useAxiosSecure from "../../Components/hooks/UseAxiosSecure";
import ArtifactCard from "../../Components/ArtifactCard";

const AllArtifacts = () => {
    const axiosSecure = useAxiosSecure();
    const [artifacts, setArtifacts] = useState([]);
    const [search, setSearch] = useState('');
    
    useEffect(()=>{
        const fetchAllData = async () =>{
            const { data } = await axiosSecure.get(`/all-artifacts?search=${search}`)
            setArtifacts(data);
        };
        fetchAllData();
    }, [search]);

    return (
        <div className="bg-[#151408c7] md:pt-12">
            <div className="max-w-7xl w-full mx-auto pb-8">
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
    </div>
    );
};

export default AllArtifacts;