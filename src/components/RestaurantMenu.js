import {useState,useEffect } from "react";
import Shimmer from "./Shimmer";

//this hook will help us to get the dynamic routing
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


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
   

    return (
        <div className = "menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{costForTwoMessage}</h2> 
            {/* if i want to display the name of the item one by one then will right in this way */}
            {/* <h1>{itemCards[0]?.card?.info?.name}</h1> */}
            <ul>
                {/* Step 21 : Now lets display the menu using iteration/mapping */}
                {itemCards.map(item => (
                   <li key = {item.card.info.id} >{item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>) || 
                   (<li>Item is not available</li>))}
            </ul>
            
        </div>
    )
}
export default RestaurantMenu;

