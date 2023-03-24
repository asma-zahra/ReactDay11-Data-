
import { image_Url } from "../Config";
const RestaurantCard = ({name , cuisines , avgRating ,cloudinaryImageId , costForTwoString, userProp,}) => {
    return (
      
      <div className="card ">
        <img src={`${image_Url}${cloudinaryImageId}`} alt="resturaunt_image" />
        <h3 className="restaurant_name">{name}</h3>
        <p>{cuisines.join(' , ')}</p>
        <div className="restaurant_info">
         <p className="rating">{avgRating} stars</p> 
         <p>{costForTwoString}</p>
         <h4>{userProp.name}</h4>
        </div>
      </div>
      
    );
  };
  export default RestaurantCard;
  