import { restaurantList } from "../../config";
import RestaurantCardComponent from "./RestaurantCardComponent";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData1 = restaurants.filter((restaurant) =>
    restaurant.name.includes(searchText)
  );
  return filterData1;
}

const BodyComponent = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  //*1
  const [searchText, setSearchValue] = useState(""); //*2

  return (
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
            const data = filterData(searchText, restaurants);
            //update the state - restaurants
            setRestaurants(data);
          }}
        >
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCardComponent
              {...restaurant}
              key={restaurant.id}

            />
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
