import { IMG_URL } from "../../config";

const RestaurantCardComponent = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  deliveryTime,
  costForTwoString
}) => {
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3 class="cuisine">{cuisines.join(", ")}</h3>
      {/* <h4>{lastMileTravelString} minutes</h4> */}
      <div className='card-subdivision'>
                    <p><span>⭐</span>{avgRating}</p>
                    <p>{deliveryTime} MINS</p>
                    <p>{costForTwoString}</p>
                </div>
                <p className='anchor'><a href="#">QUICK VIEW</a></p>
    </div>
  );
};

export default RestaurantCardComponent;
