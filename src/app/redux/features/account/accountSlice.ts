import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Slice } from "@reduxjs/toolkit";
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
    orders: any;
}

const initialState = {
    accountData: null,
    cart: null,
    wishlist: null,
    orders: null
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
                state.cart.push(product)
                
                // return {
                //     ...state,
                //     cart: [ ...state.cart, action.payload]
                // }
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
        removeCart: (state) => {
            state.cart = null;
        },
        setCart: (state, action: PayloadAction<ProductCart[]>) => {
            state.cart = action.payload;
        },
        addToWishlist: (state, action: PayloadAction<ProductCart>) => {
            let product = action.payload;
            
            if(!state.wishlist){
                state.wishlist = [product]
            }else{
                state.wishlist.push(product)
            }
        },
        removeFromWishlist: (state, action: PayloadAction<any>) => {
            let product = action.payload;

            if(state.wishlist) {
                const wishlist = state.wishlist;
                wishlist.splice(product.idx, 1)

                state.wishlist = wishlist;

            }
        },
        removeWishlist: (state, action) => {
            state.wishlist = null;
        },
        addToOrder: (state, action: PayloadAction<any>) => {
            const order = action.payload;
            
            if(!state.orders){
                state.orders = [order]
            }else{
                state.orders.push(order)
            }
        },
        updateOrderStatus: (state, action: PayloadAction<any>) => {
            let ref = action.payload[0], status = action.payload[1];

            if(state.orders) {
                state.orders.forEach((order: any) => {
                    if(order[0] === ref){
                        order[2] = status
                    }
                })
            }
        },
        removeOrders: (state) => {
            state.orders = null;
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

        }).addCase(postOrders.fulfilled, (state, action) => {
            state.orders = action.payload.data.orders
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

export const postOrders = createAsyncThunk("account/postOrders", async ( _:void, { getState} ) => {
    // when dispatching postOrders to fetch orders on new login, check if orders is null before fetching !!Warn
    const state: any = await getState();

    // const cachedData = state.data.cached; // Assume we have cached data in the state

    // if (cachedData) {
    //   return cachedData; // If we already have cached data, no need to fetch
    // }

    // To save db memory in the future //update the orders in db with only the last order in the orders array

    let orders = state.account.orders, email = state.auth.user.email, data;

    if(orders){
        data = await axios.post('/api/account/update_orders', {
            email,
            order: orders[orders.length - 1]
          }).then((data) => {
            console.log("data.data", "send email to admin with order data")
            return data.data
          })
    }else {
        data = await axios.post('/api/account/fetch_user', {
            email,
          }).then((data) => {
            return data.data
          })
    }

    return data; //for webhooks return true, whole data not needed
})

export default accountSlice.reducer;
export const { 
    addToCart, 
    setImageData, 
    removeFromCart, 
    removeCart, 
    updateCart, 
    setCart, 
    removeFromWishlist, 
    addToWishlist, 
    removeWishlist, 
    addToOrder, 
    updateOrderStatus 
} = accountSlice.actions