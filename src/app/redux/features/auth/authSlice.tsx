'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  userInfo: userInfoType | null; //if all good ? remove this
  user: any;
  isLoading: boolean;
  loggedOut: boolean;
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
  isLoading: false,
  loggedOut: true
} as initialStateType;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<userInfoType>) => {
      state.user = action.payload;
      state.loggedOut = false;
      // localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.loggedOut = false;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    login(state){
      state.loggedOut = false;
    },
    logout: (state) => {
      state.user = null;
      state.userInfo = null;
      state.loggedOut = true;
      localStorage.removeItem("accessToken");
    },
  },
});

export default authSlice.reducer;
export const { setCredentials, logout, setUser, stopLoading, login } = authSlice.actions;