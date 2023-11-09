'use client';

import { createSlice } from "@reduxjs/toolkit";

export interface countState_T {
    value: number
}

const initialState: countState_T = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {state.value += 1},
        decrement: (state) => {state.value -= 1},
        increamentByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increamentByAmount, increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;