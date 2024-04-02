import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let url = (process.env.NODE_ENV !== "development") ? process.env.NEXT_PUBLIC_TS_SERVER_URL : process.env.NEXT_PUBLIC_SERVER_APP_BASE_URL;
console.log('apiSlice.tsx:4 url', url)

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  tagTypes: [
    "Photo",
    "User",
    "Brand",
    "Category",
    "Product",
    "Store",
    "Subcategory",
    "Pay"
  ],
  endpoints: () => ({}),
});

export default apiSlice;