import { useState, useEffect } from "react";
import { fetch_menu_Url } from "../Config";
const useRestaurantMenu = (resid)=>{
    const [restaurantMenu, setRestaurantMenu] = useState([]);

    // fetch the data from API
    useEffect(() => {
        getMenu();
      }, []);
    
      async function getMenu() {
        const data = await fetch(
            fetch_menu_Url + resid
        );
        const json = await data.json();
        console.log(json.data);
        setRestaurantMenu(json.data);
      }

    //   Return restaurent Data
    return restaurantMenu
}
export default useRestaurantMenu