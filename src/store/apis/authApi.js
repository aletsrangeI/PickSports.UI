import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:44303/" }),
  endpoints: (builder) => ({
    registerNewUser: builder.mutation({
      query: (payload) => ({
        url: "api/Users/Register",
        method: "POST",
        body: payload,
        header: {
          "Content-Type": "application/json",
        },
      }),
    }),

    login: builder.mutation({
      query: (payload) => ({
        url: "api/Users/Authenticate",
        method: "POST",
        body: payload,
        header: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useRegisterNewUserMutation, useLoginMutation } = authApi;
