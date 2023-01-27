
import { image_Url } from "../Config";
const RestaurantCard = ({name , cuisines , avgRating ,cloudinaryImageId , costForTwoString}) => {
    return (
      
      <div className="card ">
        <img src={`${image_Url}${cloudinaryImageId}`} alt="resturaunt_image" />
        <h3 className="restaurant_name">{name}</h3>
        <p>{cuisines.join(' , ')}</p>
        <div className="restaurant_info">
         <p className="rating">{avgRating} stars</p> 
         <p>{costForTwoString}</p>
        </div>
      </div>
      
    );
  };
  export default RestaurantCard;
  