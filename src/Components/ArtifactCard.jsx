import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ArtifactCard = ({ artifact }) => {
    const {name, imageUrl, category, present_location, _id} = artifact;
  return (
      <div className="card rounded-md p-4 text-white bg-[#705e4c] border col-span-12 md:col-span-6">
        <figure>
          <img className="h-350px md:h-[500px] rounded-md w-full"
            src={imageUrl}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl lg:text-3xl">{name}</h2>
          <p>Present location: {present_location}</p>
          <p>Category: {category}</p>
          <div className="card-actions justify-end">
            <Link to={`/artifact-details/${_id}`} className="px-6 py-3 rounded-md hover:bg-[#8c7660] bg-[#C4A484]">Details</Link>
          </div>
        </div>
      </div>
  );
};

export default ArtifactCard;
