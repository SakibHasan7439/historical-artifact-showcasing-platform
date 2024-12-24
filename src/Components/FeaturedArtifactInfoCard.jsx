import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const FeaturedArtifactInfoCard = ({ artifact }) => {
  const { name, imageUrl, like_count,  historical_context, _id } =
    artifact;
  return (
    <div className="card border bg-white col-span-12 md:col-span-6 lg:col-span-4 shadow-md rounded-md">
      <figure>
        <img className="h-[280px]"
          src={imageUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-playfair">{name}</h2>
        <p className="font-playfair text-sm lg:text-lg"><strong>Historical Context: </strong>{historical_context.substring(0, 40)}...</p>
        <div className="card-actions justify-start">
          <div className="px-4 py-2 rounded-full border border-black"><strong>Like Count: </strong>{like_count}</div>
          <Link to={`/artifact-details/${_id}`} className="px-4 py-2 rounded-md bg-[#C4A484] hover:bg-[#766656] shadow-md btn-anime shadow-slate-600 text-white">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtifactInfoCard;
