//Step: 40- Making a slice of Cart using createSlice
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // Configurations of the cart
    name: "cart",
    initialState:{
        items:[]
    },
    reducers:{
        //will contain the actions and modifies my store
        addItem: (state,action) => {
            state.items.push(action.payload);
        },
        removeItem:(state ) => {
            state.items.pop();
        },
        clearCart: (state) =>{
            state.items.length = 0;
        }
    }
});
export const {addItem,removeItem,clearCart} = cartSlice.actions; 
export default cartSlice.reducer;

// cartSlice is a Object which has reducers which contains the actions