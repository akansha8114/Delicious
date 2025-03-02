import {CDN_URL} from "../utils/contents";
//Step 4 : component of Restaurant card:So that we can use the template again & again
const Restaurantcard = (props) => {
    const {resdata} = props;
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime} = resdata?.info;  
    return (
        <div className = "res-card">
            <img className="res-logo" alt = "res-logo" src = {
               CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{Array.isArray(cuisines) ? cuisines.join(", ") : "No cuisines available"}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
            
        </div>
    );
};

//Step 27: Higher order component -> input component - Restaurantcard output component - RestaurantcardPromoted
export const withPromotedLabel = (Restaurantcard) => {
    //return a component that is why wrote "() => {}"
    return (props) => {
        //And that component will return a piece of jsx
        return(
            <div>
                <label className="Promoted">Open</label>
                <Restaurantcard {...props}/>
            </div>    
        )
    };
};
export default Restaurantcard;