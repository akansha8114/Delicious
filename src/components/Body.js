import Restaurantcard from "./RestaurantCard";
import resobj from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
//Step 3: Now lets make a component for Body
const Body = () => {

    //Step 6 : Making a state variable to render the resobj and update the resobj using hooks
    const [listofrestaurants,setlistofrestaurants] = useState([]);

    //Step 11: To bind search text means whatever we are typing in the search box
    //and wants to show on UI we need a state variable
    const [searchText, setSearchText] = useState("");

    //Step 13 : making the copy of listofrestaurants
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

     
    //First argument is a call back function and second argument is an dependency array
    //this hook will use to render the body component after makin the api call
    useEffect(()=>{
      fetchData();
    },[])

    //fetch is a function provided by the browser which returns the promise
    //this promise will be resolve with help of the async await function
    const fetchData = async() => {
      const data = await fetch(
        //URL of the site which we want to fetch data from
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5399515&lng=77.25915789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      //Now once we have data we have to convert this data into JSON
      //await funtion waits for the promise to be resolved
      const json = await data.json();
      console.log(json);

      //Now we wnat to update the data in the UI which we have fetched from the api call
      setlistofrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //Step 14 : updating filteredRestaurants also
      setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //Step 7 : Now we have to check if the resobj is empty or not means if the data is fetched or not
    //if not then this component will return the shimmer component
    //The below function is known as conditional rendering
    if(listofrestaurants.length === 0){
      return <Shimmer/>;
    }

    return(

      <div className = "body">
         <div className = "filter">
          {/* Step 10: Make a search bar */}
          {/* onChange handler update the input text on the UI on every keystroke/updates
          the search text */}
          <div className="search">
            <input type = "text" placeholder = "Search" className = "search-box"
             value = {searchText} onChange = {(e) => {
              setSearchText(e.target.value);
             }}>
             </input>
             {/* Step 12 : making the button for search */}
            <button className = "search-btn" onClick={()=>{
              //filter the listof restaurants and update the UI according to the search
              const filteredRestaurants = listofrestaurants.filter((res) => res?.info?.name.toLowerCase(). includes(searchText.toLowerCase()));
              setfilteredRestaurants(filteredRestaurants);

            }}>Search</button>
          </div>

            <button className = "filter-btn"
             onClick = {() => {
                 //sort the resobj on the basis of rating
                 const filterlist = listofrestaurants.filter((res) => res?.info?.avgRating > 4.4);
                 console.log(filterlist);
                 //update the resobj with setresobj
                 setlistofrestaurants(filterlist);
             }
            }>
                Top-Rated Restaurants</button>
         </div>
         <div className = "res-container"> 
            {/* mapping means looping at each restaurant in the resobj one by one */}
            {listofrestaurants.map((restaurant) => (
              <Restaurantcard key ={restaurant?.info?.id} resdata = {restaurant}/> 
             ))} 
         </div>

       </div>
    )
    
}
export default Body;