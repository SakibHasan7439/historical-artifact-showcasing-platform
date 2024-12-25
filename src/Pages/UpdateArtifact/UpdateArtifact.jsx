import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Components/hooks/UseAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const UpdateArtifact = () => {
  const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [artifactData, setArtifactData] = useState({});
    const {id} = useParams();

    useEffect(()=>{  
        fetchArtifactData();
    }, [id]);

    const fetchArtifactData = async() =>{
        const {data} = await axiosSecure.get(`/artifact/${id}`)
        setArtifactData(data);
    }

    const { category, creation_time, discover_time, discoverer, historical_context, imageUrl, name, present_location } = artifactData;
    
    const handleSubmitUpdateArtifact = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form);
        try {
            const {data} = axiosSecure.put(`/update-artifact/${id}`, formData);
            console.log(data);
            Swal.fire({
                title: "Successfully Updated",
                text: "Data successfully updated in the Database",
                icon: "success"
            });

        } catch (error) {
            toast.error(error.message);
        }
    }
  return (
    <div className="bg-[#c4a4843b] pb-6 md:pb-12">
      <div className="flex justify-center items-center flex-col max-w-4xl w-full mx-auto">
        <h1 className="text-3xl mt-4 lg:text-4xl mb-8 text-slate-700 font-bold bg-[#C4A484] px-4 py-2 rounded-md">
          Update Artifacts
        </h1>
        <div className="card bg-base-100 border w-full">
          <form onSubmit={handleSubmitUpdateArtifact} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Artifact Name</span>
              </label>
              <input
                type="text"
                placeholder="Artifact Name"
                defaultValue={name}
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Artifact Image</span>
              </label>
              <input
                type="url"
                placeholder="Artifact image"
                defaultValue={imageUrl}
                name="imageUrl"
                className="input input-bordered"
                required
              />
            </div>
            <select
              name="category"
              id="category"
              defaultValue={category}
              className="border p-4 rounded-lg"
            >
              <option>Artifact Type</option>
              <option value="Tools">Tools</option>
              <option value="Weapon">Weapon</option>
              <option value="Documents">Documents</option>
              <option value="Writings">Writings</option>
            </select>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Historical Context</span>
              </label>
              <textarea
                placeholder="Historical Context"
                name="historical_context"
                defaultValue={historical_context}
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Created At</span>
              </label>
              <input
                type="text"
                placeholder="Created At"
                name="creation_time"
                defaultValue={creation_time}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Discovered At</span>
              </label>
              <input
                type="text"
                placeholder="Discover time"
                name="discover_time"
                defaultValue={discover_time}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Discovered By</span>
              </label>
              <input
                type="text"
                placeholder="Discovered By"
                name="discoverer"
                defaultValue={discoverer}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Present Location</span>
              </label>
              <input
                type="text"
                placeholder="Present Location"
                name="present_location"
                defaultValue={present_location}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Artifact Adder Name</span>
              </label>
              <input
                type="text"
                name="adder_name"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Artifact Adder Email</span>
              </label>
              <input
                type="text"
                name="adder_email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#C4A484] text-lg px-4 py-3 rounded-md">
                Add Artifact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateArtifact;
