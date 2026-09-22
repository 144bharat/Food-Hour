import {configureStore} from "@reduxjs/toolkit";
import cartSliceReducer from "./slices/cartSlice";
import appSliceReducer from "./slices/appSlice";

const appStore = configureStore(
    {
        // THIS SINGLE BIG REDUCER FOR APPSTORE CAN HAVE MULTIPLE REDUCER FROM EACH SLICE.
        reducer:{
            cart: cartSliceReducer,
            app: appSliceReducer,
        }
    }
);

export default appStore;