import type { Product } from "@/app/assets/data/data";
import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    cart: Product[] | null;
}

const initialState = {
    cart: null
} as initialStateType;


const accountSlice = createSlice({
    name: 'account',
    initialState: initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload //payload is an array of objects for each product data
        }
    }
})

export default accountSlice.reducer;