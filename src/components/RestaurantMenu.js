import {useState,useEffect } from "react";
import Shimmer from "./Shimmer";

//Step 19 : Now lets make a component for RestaurantMenu which will display
//  the menu of that restaurant 
//want to achiev this with the help of dynamic routing 

const RestaurantMenu = () => {
    console.log("RestaurantMenu component is rendering...");


    const [resInfo,setResInfo] = useState(null);


    useEffect = (() => {
        console.log("Use Effect Called");
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        console.log("Fetching Menu...");
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5399515&lng=77.25915789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json?.data);
    };

   

    if(resInfo === null) return <Shimmer/>;

    return (
        <div className = "menu">
            <h1>{resInfo?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;