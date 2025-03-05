import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () =>{
    //Step 43: How will i get my data from the store to the cart ? with the help of selector
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="Cart">
            <h1 className="Cart-container">Cart</h1>
            <div className="cart-items">
                <button className="clear-cart" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <div className="empty-cart">Your cart is empty</div>}
                <ItemList items = {cartItems}/>
            </div>
        </div>
    );
}

export default Cart;