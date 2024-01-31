'use client';

import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";

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
import { apiSlice } from "../features/api/apiSlice";
import counterReducer from "../features/counter/counterSlice";
import accountReducer from "../features/account/accountSlice";
import productReducer from "../features/product/productSlice";

const isDev = process.env.NEXT_PUBLIC_NODE_ENV === "development"
const middlewareLogger: any = !!isDev ? logger : [];

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const allReducers = {
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  account: accountReducer,
  products: productReducer,
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
    }).concat(apiSlice.middleware, /*middlewareLogger*/),
    devTools: true,
});

// setupListeners(store.dispatch)

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch