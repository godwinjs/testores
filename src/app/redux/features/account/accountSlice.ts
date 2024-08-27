import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Slice } from "@reduxjs/toolkit"
import { getServerSession } from "next-auth/next";
import type { ProductCart } from "@/app/assets/data/data";

// jox8fs1y
type imageData = {
    url?: string;
    loading: boolean;
}

type accountDataType = {
    name?: String | null;
    image?: String | null;
    email?: String | null;
    fullName?: String;
    joined?: String;
    lastUpdate?: String;
    roles?: string;
    gender?: string;
    dob?: string;
    imageData: imageData | null;
  }

interface initialStateType {
    accountData: accountDataType | null;
    cart: ProductCart[] | null;
    wishlist: any;
}

const initialState = {
    accountData: null,
    cart: null,
    wishlist: null,
} as initialStateType;


const accountSlice: Slice = createSlice({
    name: 'account',
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductCart>) => {
            let product = action.payload;
            
            if(!state.cart){
                state.cart = [product]
            }else{
                state.cart.push(action.payload)
                
                // return {
                //     ...state,
                //     cart: [ ...state.cart, action.payload]
                // }
            }
        },
        addToWishlist: (state, action: PayloadAction<ProductCart>) => {
            let product = action.payload;
            
            if(!state.wishlist){
                state.wishlist = [product]
            }else{
                state.wishlist.push(product)
            }
        },
        updateCart: (state, action) => {
            let index = action.payload[0];
            let product = action.payload[1];

            if(state.cart) {
                const cart = state.cart;
                cart.splice(index, 1, product)

                state.cart = cart;
            }
            if(product.type === "wishlist"){

                if(state.wishlist) {
                    const wishlist = state.wishlist;
                    wishlist.splice(index, 1, product)
    
                    state.wishlist = wishlist;
                }
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            let index = action.payload;
            if(state.cart) {
                const cart = state.cart;
                cart.splice(index, 1)

                state.cart = cart;

            }
            
            // if(product.type === "wishlist"){/////////////////////////////////////////
            //     if(state.cart) {
            //         const cart = state.cart;
            //         cart.splice(index, 1)
    
            //         state.cart = cart;
    
            //     }
            // }
        },
        removeFromWishlist: (state, action: PayloadAction<any>) => {
            let product = action.payload;

            if(state.wishlist) {
                const wishlist = state.wishlist;
                wishlist.splice(product.idx, 1)

                state.wishlist = wishlist;

            }
        },
        removeCart: (state) => {
            state.cart = null;
        },
        removeWishlist: (state) => {
            state.wishlist = null;
        },
        setCart: (state, action: PayloadAction<ProductCart[]>) => {
            state.cart = action.payload;
        },
        setImageData: (state, action: PayloadAction<imageData>) => {
            state.accountData = {
                ...state.accountData,
                imageData: action.payload
            }
        },
    },
    extraReducers: builder => {
        builder.addCase(sessionAsync.fulfilled, (state, action) => {
            state.accountData = action.payload;
        }).addCase(uploadImage.pending, (state, action) => {
            console.log('uploadImage fulfilled..', action.payload)

        })
    }
})

export const sessionAsync = createAsyncThunk(
    "account/sessionAsync",
    async (_: void) => {
        const session = await getServerSession();
        const user = session?.user;
        return user as accountDataType;
    }
)

export const uploadImage = createAsyncThunk(
    "account/uploadImage",
    async (_:void, { dispatch, getState }) => {

        const state: any = await getState();
        // const image = await state.accountData.imageData.image;   
        dispatch(accountSlice.actions.setImageData({
            ...state.account.accountData.imageData,
            loading: true
        }))

        return 'image...'

    }
)

export default accountSlice.reducer;
export const { addToCart, setImageData, removeFromCart, removeCart, updateCart, setCart, removeFromWishlist, addToWishlist, removeWishlist } = accountSlice.actions