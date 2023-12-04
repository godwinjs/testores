import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getServerSession } from "next-auth/next";
import type { ProductCart } from "@/app/assets/data/data";

// jox8fs1y
type imageData = {
    image?: any;
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
                name: undefined,
                image: undefined,
                email: undefined,
                fullName: undefined,
                joined: undefined,
                lastUpdate: undefined,
                roles: undefined,
                gender: undefined, 
                dob: undefined, 
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

        const data = new FormData();
        if(process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET && state) {
            const imageFile = await urltoFile(state.account.accountData.imageData.image, state.auth.userInfo.fullName+'.png', 'image/png');
            data.append("file", imageFile);
            data.append(
            "upload_preset",
            process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
            );
            if(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME){
                data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
            }
            data.append("folder", "Cloudinary-React");
            console.log(imageFile)
        }


        // try {
        // const response = await fetch(
        //     `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        //     {
        //     method: "POST",
        //     body: data,
        //     }
        // );
        // const res = await response.json();
        // setUrl(res.public_id);
        // setLoading(false);
        // } catch (error) {
        //     setLoading(false);
        // }

        return 'image...'

    }
)

export function urltoFile(url: any, filename: string, mimeType: any){
    if (url.startsWith('data:')) {
        var arr = url.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        var file = new File([u8arr], filename, {type:mime || mimeType});
        return Promise.resolve(file);
    }
    return fetch(url)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], filename,{ type: "image/png" })
          return file;
        })

        /*fetch(url)
        .then(res => res.arrayBuffer())
        .then(buf => new File([buf], filename,{type:mimeType})); */
}

export default accountSlice.reducer;
export const { addToCart, setImageData } = accountSlice.actions