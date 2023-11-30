import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getServerSession } from "next-auth/next";

// jox8fs1y

type accountDataType = {
    name?: String | null;
    image?: String | null;
    email?: String | null;
    fullName?: String;
    joined?: String;
    lastUpdate?: String;
    userType?: string;
    gender?: string;
    dob?: string;
  }

interface initialStateType {
    accountData: accountDataType | null;
}

const initialState = {
    accountData: null
} as initialStateType;


const accountSlice = createSlice({
    name: 'account',
    initialState: initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(sessionAsync.fulfilled, (state, action) => {
            state.accountData = action.payload;
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

export default accountSlice.reducer;