'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  userInfo: userInfoType | null;
}
type userInfoType = {
  name?: String | null | undefined;
  image?: String | null | undefined;
  email?: String | null | undefined;
  fullName?: String;
  joined?: String;
  lastUpdate?: String
}
const initialState = {
  userInfo: null,
} as initialStateType;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<userInfoType>) => {
      state.userInfo = action.payload;
      // localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state: initialStateType) => {
      state.userInfo = null;
    },
  },
});

export default authSlice.reducer;
export const { setCredentials, logout } = authSlice.actions;