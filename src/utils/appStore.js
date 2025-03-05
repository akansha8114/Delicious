//Thi is a redux Store
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";

//Step 38: Now we will create a store with the help of configureStore
const appStore = configureStore({
    // step 41: Now we will add a cartSlice into our appstore reducer
    reducer: {
        cart: cartReducer,   
    },
});

export default appStore;