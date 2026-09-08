import {configureStore} from "@reduxjs/toolkit";
import cartSliceReducer from "./slices/cartSlice";

const appStore = configureStore(
    {
        // THIS SINGLE BIG REDUCER FOR APPSTORE CAN HAVE MULTIPLE REDUCER FROM EACH SLICE.
        reducer:{
            cart: cartSliceReducer
        }
    }
);

export default appStore;