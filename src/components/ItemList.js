// Step 33" component for the body content of the accordian it will list the items name under each category
import { CDN_URL } from "../utils/contents";

const ItemList = ({ items }) => {
  return (
    <div className="ItemList">
      {items.map((item) => (
        <div key={item.card.info.id} className="Item ItemCard">
          <div className="ItemContent">
            <span className="ItemName">{item.card.info.name}</span>
            <span className="ItemPrice">
              ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <div className="ItemDescription">
            <p>{item.card.info.description}</p>
          </div>
          <div className="ItemActions">
            <button className="Addbtn">Add +</button>
            <img className="img" src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
