'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  userInfo: userInfoType | null;
  user: any;
  isLoading: boolean;
}
type userInfoType = {
  name?: String | null;
  image?: String | null;
  email?: String | null;
  fullName?: String;
  joined?: String;
  lastUpdate?: String;
  roles?: String;
}
const initialState = {
  userInfo: null,
  user: null,
  isLoading: false
} as initialStateType;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<userInfoType>) => {
      state.userInfo = action.payload;
      // localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = {};
      state.userInfo = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export default authSlice.reducer;
export const { setCredentials, logout, setUser, stopLoading } = authSlice.actions;