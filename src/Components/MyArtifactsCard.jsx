/* eslint-disable react/prop-types */
// import unlike from "../assets/like.png"
import updatePen from "../assets/pen.png"
import deleteIcon from "../assets/bin.png"
import toast from "react-hot-toast";
import { axiosSecure } from "./hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyArtifactsCard = ({ artifact, fetchAllData }) => {
    const { category, creation_time, discover_time, historical_context, imageUrl, like_count, name, present_location, _id } = artifact;

    const handleSubmitDelete = async (_id) =>{
        try {
            const { data } = await axiosSecure.delete(`/my-artifacts/${_id}`);
            fetchAllData();
            console.log(data);

        } catch (error) {
            toast.error(error.message)
        }
    }

    const confirmDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              handleSubmitDelete(id);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
  return (
    <div className="card bg-base-100 col-span-12 md:col-span-6 lg:col-span-4 shadow-xl">
    <figure>
        <img className="h-[290px] w-full object-cover"
        src={imageUrl}
        alt="Shoes"
        />
    </figure>
    <div className="card-body">
        <h2 className="card-title">
        {name}
        <div className="badge bg-[#C4A484] border-none badge-secondary py-3">{category}</div>
        </h2>
        <p>{historical_context.substring(0, 40)}...</p>
        <p><strong>Discover Time: </strong>{discover_time}</p>
        <p><strong>Creation Time: </strong>{creation_time}</p>
        <p><strong>Present Location: </strong>{present_location}</p>
        <div className="card-actions items-center justify-start">
            <Link to={`/update-artifact/${_id}`}>
                <img className="w-6 md:w-8 cursor-pointer" src={updatePen} alt="updateIcon" />
            </Link>
            <img onClick={()=>confirmDelete(_id)} className="w-6 md:w-8 cursor-pointer" src={deleteIcon} alt="updateIcon" />
        </div>
            <div className="text-right">
                <div className="badge badge-outline py-4"><strong>Like Count</strong>: {like_count}</div>
            </div>
    </div>
    </div>
  );
};

export default MyArtifactsCard;
