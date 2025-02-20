import {useState,useEffect } from "react";
import Shimmer from "./Shimmer";

//Step 19 : Now lets make a component for RestaurantMenu which will display
//  the menu of that restaurant 
//want to achiev this with the help of dynamic routing 

const RestaurantMenu = () => {
    console.log("RestaurantMenu component is rendering...");


    const [resInfo,setResInfo] = useState(null);


    useEffect(()=>{
        fetchMenu();
      },[])

    const fetchMenu = async () => {
        console.log("Fetching Menu...");
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5399515&lng=77.25915789999999&restaurantId=450016&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json?.data);
    };


    if(resInfo === null) return <Shimmer/>;

    //const {name, cuisines,cloudinaryImageId,costForTwoMessage} = resInfo?.data?.cards[0]?.groupedCard?.cards[2]?.card?.card?.info;

    return (
        <div className = "menu">
            <h1></h1>
            {/* <h2>{cuisines}</h2>
            <h2>{cloudinaryImageId}</h2>
            <h2>{costForTwoMessage}</h2> */} */
            <h1>Menu</h1>
            
        </div>
    )
}
export default RestaurantMenu;