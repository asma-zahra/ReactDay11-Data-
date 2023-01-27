import Shimmer from "./Shimmer";
import RestaurantCard from "./restaurauntCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function filterData(searchText, restaurantList) {
  return restaurantList.filter((item) => item?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
}

const BodyComponent = () => {
  const [filteredRestaurantList, setfilteredRestaurant] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    
    console.log("render-useEffect callback");
    getSwiiggyData();
  }, []);

  async function getSwiiggyData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7729751&lng=82.1457934&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
  }

  if(!restaurantList) return null;
  // if(filteredRestaurantList?.length) return <h1>Sorry! , Filter does not match</h1>;
  console.log("render()");
  return (restaurantList?.length ===0)  ? <Shimmer/> : (
    // Before Restaurant List we will have search bar}
    <>
      <div className="container">
        <div className="search_container ">
          <input
            type="search"
            className="search_input"
            autoFocus
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search_btn"
            onClick={() => {
              const searchedData = filterData(searchText, restaurantList);
              console.log(restaurantList);
              console.log(searchText);

              // update restaurantList by calling function setRestaurantList
              setfilteredRestaurant(searchedData);
            }}
          >
            Search{" "}
          </button>
        </div>

        {/*maaped restaurant List */}
        <div className="card_group">
        {filteredRestaurantList.map((item) => {
            return(
            <Link to={"/restaurant/"+ item.data.id} key={item.data.id}>
             <RestaurantCard  {...item.data} />
             </Link>)
          })}
        </div>
      </div>
    </>
  );
};
export default BodyComponent;
