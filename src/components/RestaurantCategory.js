import ItemList from "./ItemList";
// Step 32 : Building the accordian for each category
const RestaurantCategory = ({data}) => {
    console.log("Recived data",data);
    return(
        <div>
            {/* Accordian Header */}
            <div className="Accordian-header">
                <div >
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span>⋁</span>
                </div>
                {/* Accordian Body */}
                <ItemList items={data.itemCards}></ItemList>
            </div>
        </div>
    )
}

export default RestaurantCategory;