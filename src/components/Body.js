import Restaurantcard from "./RestaurantCard";
import resobj from "../utils/mockData";
import { useState } from "react";
//Step 3: Now lets make a component for Body
const Body = () => {

    const [listofrestaurants,setlistofrestaurants] = useState(resobj) ; 
    return(
      <div className = "body">
         <div className = "filter">
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