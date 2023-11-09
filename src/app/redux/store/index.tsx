'use client';

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"

import authReducer from "../features/auth/authSlice";
import { apiSlice } from "../features/api/apiSlice";
import counterReducer from "../features/counter/counterSlice"

const isDev = process.env.NODE_ENV === "development"
const middlewareLogger: any = !!isDev ? logger : [];

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, middlewareLogger),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch