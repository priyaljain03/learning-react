import RestaurentCard from "./RestaurentCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // Local state variable: Super powerful variable;
    const [listOfRestaurents, setListOfRestaurents] = useState([]);
    const [filteredRestaurents, setFilteredRestaurents] = useState([]);
    let [searchText, setSearchText] = useState("");

    // Useeffect gets called after the component is rendered;
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9231876&lng=77.6202747&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();
        console.log("json", json);
        // Optional Chaining;
        setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    // Conditional Rendering;
    // if (listOfRestaurents.length === 0) {
    //     return <Shimmer />
    // }

    //Conditional Rendering using Ternary Operator;
    return listOfRestaurents.length === 0 ? <Shimmer /> : <div className="body">
        <div className="filter">
            <div className="search">
                <input
                    type="text"
                    className="search-box"
                    placeholder="Search for restaurants..."
                    value={searchText}
                    onChange={e => {
                        console.log(e.target.value);
                        setSearchText(e.target.value)
                    }}
                />
                {/* //Filter the restaurent cards and update the UI */}
                <button onClick={() => {
                    const filteredList = listOfRestaurents.filter(res => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                    console.log("filteredList", filteredList);
                    setFilteredRestaurents(filteredList);
                }}>Search</button>
            </div>
            <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurents.filter(res => {
                        return res?.info?.avgRating > 4
                    });

                    setFilteredRestaurents(filteredList);
                }
                }>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {filteredRestaurents.map(restaurant => (
                <RestaurentCard
                    key={restaurant?.info?.id}
                    resList={restaurant?.info}
                />
            ))}
        </div>
    </div>
}

export default Body;