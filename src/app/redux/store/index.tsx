'use client';

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PURGE,
  REGISTER,
  persistCombineReducers,
  PERSIST
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "../features/auth/authSlice";
// import { apiSlice } from "../features/api/apiSlice";
import counterReducer from "../features/counter/counterSlice";
import accountReducer from "../features/account/accountSlice";

const isDev = process.env.NODE_ENV === "development"
const middlewareLogger: any = !!isDev ? logger : [];

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const allReducers = {
  auth: authReducer,
  account: accountReducer,
  // [apiSlice.reducerPath]: apiSlice.reducer,
  counter: counterReducer
};

const persistedReducer = persistCombineReducers(persistConfig, allReducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(apiSlice.middleware, middlewareLogger),
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PURGE, REGISTER, PERSIST]
      }
    }).concat(middlewareLogger),
    devTools: true,
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch