import { useParams } from "react-router-dom";
import { image_Url } from "../Config";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [restaurantMenu, setRestaurantMenu] = useState([]);
  const param = useParams();
  const { resid } = param;
  console.log(param);
  // call custom hook
  const restaurant = useRestaurantMenu(resid);

  if(restaurant.length===0) return null;
  return  (
    <>
      <div className="retaurant_menu_Banner ">
        <div className="container info_align">
          <div className="menu_image">
            <img
              src={image_Url + restaurant.cloudinaryImageId}
              alt="menu_image"
            />
          </div>

          <div className="restaurant_basic_info">
            <h1 className="menu_name">{restaurant.name}</h1>
            <p className="mneu_cuisines">{restaurant.cuisines.join(" , ")}</p>
            <p className="menu_locality">{restaurant.locality}</p>
            <p className="menu_cost">Cost for Two: {restaurant.costForTwo}</p>
            <p className="menu_locality">Rating: {restaurant.avgRating}</p>
            <p className="menu_locality">Delivery Time: {restaurant?.sla?.deliveryTime} min</p>
          </div>
        </div>
      </div>
      <div className="main_menu container">
      <h2>Menu</h2>
      <br/>
        <ul>
          {/* in this ul return mapped li which is menu name */}
          {Object.values(restaurant?.menu?.items)?.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
export default RestaurantMenu;
