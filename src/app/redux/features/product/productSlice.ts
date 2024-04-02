import type { Product } from "@/app/assets/data/data";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface productType {
    id?: String;
    products: Product[] | null;
    createdAt?: String;
    updatedAt?: String;
}
interface initialStateType {
    products: productType[] | null;
}

const initialState = {
    products: null
} as initialStateType;


const productSlice = createSlice({
    name: 'products',
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