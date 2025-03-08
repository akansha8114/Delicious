// Step 33" component for the body content of the accordian it will list the items name under each category
import { CDN_URL } from "../utils/contents";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";


const ItemList = ({ items, dummy }) => {

  const dispatch = useDispatch();

  // Step 43: Now we will dispatch an action to the store which will ahppen after clicking the add button
  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
    // whatever we pass in an addItem as an argument it will pass a payload and passes as a second argument in a addItem action
    //action.payload = " " -> whatever passed in an argument of addItem will be passed as a payload

  };
  return (
    <div className="ItemList">
      {items.map((item) => (
        <div   data-testid="food-item" key={item.card.info.id} className="Item ItemCard">
          <div  className="ItemContent">
            <span className="ItemName">{item.card.info.name}</span>
            <span className="ItemPrice">
              ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <div className="ItemDescription">
            <p>{item.card.info.description}</p>
          </div>
          <div className="ItemActions">
            <button className="Addbtn" aria-label="Add item to cart"  onClick={() => handleAddItem(item)}>Add +</button>
            <img className="img" src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
