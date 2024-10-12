import type { Product } from "@/app/assets/data/data";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface productType {
    id?: String;
    products: Product[] | null;
    createdAt?: String;
    updatedAt?: String;
}
interface initialStateType {
    products: productType[] | null;
    product: Product[];
    loading: boolean;
    error: string | null;
}

const initialState = {
    products: null,
    product: [],
    loading: false,
    error: null,
} as initialStateType;

// Update to accept search query
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (searchQuery: any = {}) => {
    
    const response = await axios.post(`/api/search`, searchQuery);
    return response.data.data as Product[];
  });

const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
          state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.product = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to fetch products';
        });
      },
})

// export const setAsync = createAsyncThunk({
//     "products/set",
//     async (action: PayloadAction[Product[]]) => {
//         return 
//     }

// })

export default productSlice.reducer;
export const { setProducts } = productSlice.actions;