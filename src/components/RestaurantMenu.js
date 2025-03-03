import {useState,useEffect } from "react";
import Shimmer from "./Shimmer";

//this hook will help us to get the dynamic routing
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


//Step 19 : Now lets make a component for RestaurantMenu which will display
//  the menu of that restaurant 
//want to achiev this with the help of dynamic routing 

const RestaurantMenu = () => {

    //Step 22 : Make a state variable to store the resId: in this we are extracting resid from the url
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    

    if(resInfo === null) return <Shimmer/>;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};


    //Step 20 : Now lets display the menu
    const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};
    console.log(itemCards);

    //Step 30 : Want to show not only recommended items but all the categories.
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("Categories",categories);

    return (
        <div className = "menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            
           
           {/* Step 31 : showing the categories item of menu with accordions */}
           {/* Mapping each categories with the help of map */}
           {categories.map((category)=>{
            <RestaurantCategory data={category?.card?.card}/>
            
            })}
            
        </div>
    )
}
export default RestaurantMenu;

