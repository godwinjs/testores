import apiSlice from "../api/apiSlice";
import { setUser } from "./authSlice";
import { v4 as uuidv4 } from "uuid";

const verificationToken = uuidv4();

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // signup a user
    signup: builder.mutation({
      query: (data) => ({
        url: "api/user/sign-up",
        method: "POST",
        body: { ...data, verificationToken},
      }),
      invalidatesTags: ["User"],
    }), 

    // signin a user
    signin: builder.mutation({
      query: (data) => ({
        url: "api/user/sign-in",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const userData = await queryFulfilled;

          if (Object.keys(userData.data).length > 0) {
            localStorage.setItem("accessToken", userData.data.accessToken);
            dispatch(setUser(userData.data));
          } else {
            console.log(userData);
          }
        } catch (error) {
          console.log(error);
        }
      },
    //   providesTags: ["User"],
    }),

    // display all users
    displayUsers: builder.query({
      query: ({ page, limit }) => ({
        url:
          page && limit
            ? `api/user/all?page=${page}&limit=${limit}`
            : `api/user/all`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    // forgot password
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "api/user/forgot-password",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),   
    // display a user
    displayUser: builder.query({
      query: (id) => ({
        url: `api/user/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    // update user
    updateUser: builder.mutation({
      query: ({ uid, userData }) => ({
        url: `api/user/${uid}`,
        method: "PATCH",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useForgotPasswordMutation,
  useUpdateUserMutation,
  useDisplayUsersQuery,
  useDisplayUserQuery
} = authApi;
