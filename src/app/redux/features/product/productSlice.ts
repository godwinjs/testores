import type { Product } from "@/app/assets/data/data";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    products: Product[] | null;
}

const initialState = {
    products: null
} as initialStateType;


const productSlice = createSlice({
    name: 'account',
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

// export const setAsync = createAsyncThunk({
//     "products/set",
//     async (action: PayloadAction[Product[]]) => {
//         return 
//     }

// })

export default productSlice.reducer;
export const { setProducts } = productSlice.actions;