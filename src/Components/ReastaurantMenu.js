import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { image_Url } from "../Config";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const param = useParams();
  const { id } = param;
  console.log(param);

  useEffect(() => {
    console.log("Restaurant Menu useEffect is called");
    getMenu();
  }, []);

  async function getMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=26.7729751&lng=82.1457934&menuId="+id
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurantMenu(json.data);
  }
  if(restaurantMenu.length===0) return null;
  return  (
    <>
      <div className="retaurant_menu_Banner ">
        <div className="container info_align">
          <div className="menu_image">
            <img
              src={image_Url + restaurantMenu.cloudinaryImageId}
              alt="menu_image"
            />
          </div>

          <div className="restaurant_basic_info">
            <h1 className="menu_name">{restaurantMenu.name}</h1>
            <p className="mneu_cuisines">{restaurantMenu.cuisines.join(" , ")}</p>
            <p className="menu_locality">{restaurantMenu.locality}</p>
            <p className="menu_cost">Cost for Two: {restaurantMenu.costForTwo}</p>
            <p className="menu_locality">Rating: {restaurantMenu.avgRating}</p>
            <p className="menu_locality">Delivery Time: {restaurantMenu?.sla?.deliveryTime} min</p>
          </div>
        </div>
      </div>
      <div className="main_menu container">
      <h2>Menu</h2>
      <br/>
        <ul>
          {/* in this ul return mapped li which is menu name */}
          {Object.values(restaurantMenu?.menu?.items)?.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
export default RestaurantMenu;
