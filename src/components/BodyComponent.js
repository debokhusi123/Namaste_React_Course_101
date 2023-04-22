import { restaurantList } from "./config";
import RestaurantCardComponent from "./RestaurantCardComponent";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";


function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const BodyComponent = () => {
  const [allRestuarantList, setAllResturantList] = useState([]);

  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  //*1
  const [searchText, setSearchValue] = useState(""); //*2


  async function getRestaurants() {


    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6869192&lng=83.2185599&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Study about optional chaining
    setAllResturantList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
  }

    //only want to call when some condition changes which will be a part of dependency array
    useEffect(() => {
      // console.log("debo")
      getRestaurants();
    }, []);

  //Check in case of no restaurants

  // not render component (Early return)
  if (!allRestuarantList) return null;

  return allRestuarantList?.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <>
      <div class="content">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />

          <button
            className="search-btn"
            onClick={() => {
              //need to filter the data
              const data = filterData(searchText, allRestuarantList);
              //update the state - restaurants
              setFilteredRestaurantList(data);
            }}
          >
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div className="restaurant-list">
          {filteredRestaurantList.map((restaurant) => {
            // return (
            //   <RestaurantCardComponent
            //     {...restaurant}
            //     key={restaurant}

            //   />
            // );
            return (
              // <RestaurantCardComponent
              //   {...restaurant.data}
              //   key={restaurant.data}
              // />
              <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCardComponent {...restaurant.data} />
            </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BodyComponent;

//*1
// const searchText = "KFC"; ---> In JavaScript making local variable
// ⇓⇓⇓⇓

//*2
// --> In react making local variable, useState returns = [variable name, function to update the variable]
//Its destructuring only like if
//const searchVar = useState();
// const [searchText, setSearchText] = searchVar;
//Line 8 is same as in Line 9 & 10.
