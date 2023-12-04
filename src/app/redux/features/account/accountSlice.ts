import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getServerSession } from "next-auth/next";
import type { ProductCart } from "@/app/assets/data/data";

// jox8fs1y
type imageData = {
    url?: string;
    loading: boolean;
    preview?: null
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
    imageData?: imageData;
  }

interface initialStateType {
    accountData: accountDataType | null;
    cart: ProductCart[] | null;
}

const initialState = {
    accountData: null,
    cart: null
} as initialStateType;


const accountSlice = createSlice({
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
export const { addToCart, setImageData } = accountSlice.actions