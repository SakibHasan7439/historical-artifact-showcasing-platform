import { Link } from "react-router-dom";
import FramerAnimeComponent from "../Components/FramerAnimeComponent";

/* eslint-disable react/prop-types */
const ArtifactCard = ({ artifact }) => {
    const {name, imageUrl, like_count, category, present_location, _id} = artifact;
  return (
      <FramerAnimeComponent className="col-span-12 md:col-span-6">
        <div className="card rounded-md p-4 text-white bg-[#705e4c] border">
        <figure>
          <img className="h-[350px] lg:h-[500px] rounded-md w-full"
            src={imageUrl}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl lg:text-3xl">{name}</h2>
          <p><strong>Present location</strong>: {present_location}</p>
          <p><strong>Category</strong>: {category}</p>
          <div className="px-4 py-2 rounded-full w-[130px] bg-[#C4A484]"> <strong>like count:</strong> { like_count}</div>
          <div className="card-actions justify-end">
            <Link to={`/artifact-details/${_id}`} className="px-6 py-3 rounded-md hover:bg-[#8c7660] bg-[#C4A484] shadow-lg btn-anime">Details</Link>
          </div>
        </div>
        </div>
      </FramerAnimeComponent>
  );
};

export default ArtifactCard;
