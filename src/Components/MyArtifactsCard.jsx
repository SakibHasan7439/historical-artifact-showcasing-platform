/* eslint-disable react/prop-types */
const MyArtifactsCard = ({ artifact }) => {
    const { category, creation_time, discover_time, historical_context, imageUrl, like_count, name, present_location } = artifact;
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
        <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div>
        <div className="badge badge-outline">Products</div>
        </div>
    </div>
    </div>
  );
};

export default MyArtifactsCard;
