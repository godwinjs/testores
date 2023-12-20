import apiSlice from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // add new product
    createProduct: builder.mutation({
      query: (data) => ({
        url: "api/product/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),

    // get all products
    displayProducts: builder.query({
      query: ({ page, limit }) => ({
        url: `api/product/all?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Product"],
      refetchOnReconnect: true,
      // keepUnusedDataFor: 1,
    }),

    // get product
    displayProduct: builder.query({
      query: (id) => ({
        url: `api/product/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
      refetchOnReconnect: true,
      keepUnusedDataFor: 1,
      retries: 3, // Set the number of retry attempts
      retryOnUnmountOrReconnect: true
      // async onQueryStarted(_, {dispatch, queryFulfilled}){
      //   dispatch(apiSlice.internalActions.onOnline(refetchOnReconnect))
      // }
    }),

    // update product
    updateProduct: builder.mutation({
      query: ({pid, productData}) => ({
        url: `api/product/${pid}`,
        method: "PATCH",
        body: productData,
      }),
      invalidatesTags: ["Product"],
    }),

    // delete product
    removeProduct: builder.mutation({
      query: (id) => ({
        url: `api/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

  }),
  overrideExisting: module.hot?.status() === "apply",
});

export const {
  useCreateProductMutation,
  useDisplayProductsQuery,
  useDisplayProductQuery,
  useUpdateProductMutation,
  useRemoveProductMutation,
} = productApi;
