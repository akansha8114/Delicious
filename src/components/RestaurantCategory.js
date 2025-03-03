import ItemList from "./ItemList";
// import * as React from "react";


// Step 32 : Building the accordian for each category

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {

/*************  ✨ Codeium Command ⭐  *************/
    /**
     * Handles the click event on the accordion header. This function is called
     * whenever the user clicks on the header of the accordion.
     * @function
     */
/******  793d654b-edde-4020-80db-91305ffa6dae  *******/
    const handleClick = () =>{
        setShowIndex();
        
    }

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