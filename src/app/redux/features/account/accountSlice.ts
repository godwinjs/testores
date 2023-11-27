import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    accountData: {
        name: string;
    } | null;
}

const initialState = {
    accountData: null
} as initialStateType;


const accountSlice = createSlice({
    name: 'account',
    initialState: initialState,
    reducers: {
        
    }
})