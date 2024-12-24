import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const LikedArtifactCard = ({artifact}) => {
    const {name, imageUrl, like_count, category, present_location, _id} = artifact;
  return (
    <div className="card card-side border p-4 rounded-md shadow-xl col-span-12 md:col-span-6">
    <figure>
        <img className="h-[250px] lg:w-[320px] object-cover"
        src={imageUrl}
        alt="Movie"
        />
    </figure>
    <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p><strong>Category: </strong>{category}</p>
        <p><strong>present location: </strong>{present_location}</p>
        <div className="px-3 py-2 rounded-full w-[130px] text-white shadow-md shadow-slate-400 bg-[#786655da]"><strong>Like Count: </strong>{like_count}</div>
        <div className="card-actions justify-end">
        <Link to={`/artifact-details/${_id}`} className="px-4 py-2 rounded-md shadow-md shadow-slate-400 bg-[#786655da] btn-anime text-white">Details</Link>
        </div>
    </div>
    </div>
  );
};

export default LikedArtifactCard;
