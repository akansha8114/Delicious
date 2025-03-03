import ItemList from "./ItemList";
import React from "/node_modules/react";
import { useState } from "/node_modules/react";
// Step 32 : Building the accordian for each category

const RestaurantCategory = ({ data }) => {
    console.log("Received data:", data);

    // Step 34: Create a state variable and initialize it to false to hide items initially
    const [showItems, setShowItems] = useState(false);

    //Step 35 : this will handle the click whenever we will click on the header of the accordian it will toggle the items b/w shpwing and hiding
    const handleClick = () => {
        setShowItems(!showItems);
    };

    return (
        <div className="accordion-container">
           
            {/* Accordion Header */}
            <div className="Accordian-header" onClick={handleClick}>
                <span className="accordion-title">
                    {data.title} ({data.itemCards.length})
                </span>
                <span className = "accordion-icon">▼</span> 
            </div>

            {/* Accordion Body */}
            {showItems && (
                <div className="Accordian-Body">
                    <div className="accordion-content">
                        <ItemList items={data.itemCards} />
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default RestaurantCategory;

// const RestaurantCategory = ({data}) => {
//     console.log("Recived data",data);

//    
//     const [showItems, setShowItems] = useState(false);

//     
//     const handleClick = () => {
//         setShowItems(!showItems);
//     }
//     return(
//         <div>
//             {/* Accordian Header */}
//             <div className="Accordian-header">
//                 <div onClick={handleClick} >
//                     <span>{data.title} ({data.itemCards.length})</span>
//                     <span>⋁</span>
//                 </div>
//                 {/* Accordian Body */}
//                 <div className="Accordian-Body">
//                    {showItems &&<ItemList items={data.itemCards}></ItemList>}
//                 </div>
                
//             </div>
//         </div>
//     )
// }

// export default RestaurantCategory;