import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Components/hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import FramerAnimeComponent from "../../Components/FramerAnimeComponent";

const AddArtifacts = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const handleSubmitAddArtifact = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const data = Object.fromEntries(form);
        const like_count = 0;
        data.like_count = like_count;
        console.log(data);

        try {
            axiosSecure.post('/add-artifacts', data);
            Swal.fire({
                title: "Successfully Added",
                text: "Data successfully added in the Database",
                icon: "success"
            });
            
        } catch (error) {
            toast.error(error.message);
        }
        e.target.reset();
        
    }

  return (
    <div className="bg-[#c4a4843b] pb-6 md:pb-12">
      <div className="flex justify-center items-center flex-col max-w-4xl w-full mx-auto">
          <FramerAnimeComponent>
            <h1 className="text-3xl lg:text-4xl mb-8 text-slate-700 font-bold bg-[#C4A484] px-4 py-2 mt-4 rounded-md">Add Artifacts</h1>
          </FramerAnimeComponent>
        <div className="card bg-base-100 border w-full">
          <form onSubmit={handleSubmitAddArtifact} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Artifact Name</span>
              </label>
              <input
                type="text"
                placeholder="Artifact Name"
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
                name="imageUrl"
                className="input input-bordered"
                required
              />
            </div>
            <select
              name="category"
              id="category"
              defaultValue={"Artifact Type"}
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

export default AddArtifacts;
