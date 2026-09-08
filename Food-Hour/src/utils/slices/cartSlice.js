import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[]
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            console.log(JSON.stringify(action.payload));

            state.items = state.items.filter((removeItem) => removeItem?.card?.info?.id !== action.payload.id);
        },
        clearItems: (state) => {
        console.log("INSIDE ACTION: CLEAR")

            state.items.length = 0;
        }
    }
})

export default cartSlice.reducer;
export const { addItem, removeItem, clearItems } = cartSlice.actions;