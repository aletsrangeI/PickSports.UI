import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking",
    userId: null,
    email: null,
    nombres: null,
    photoURL: null,
    authToken: null,
  },

  reducers: {
    login: (state, { payload }) => {
      console.log(payload);
      state.status = "authenticated";
      state.userId = payload.data.userId;
      state.email = payload.data.email;
      state.nombres = `${payload.data.nombres} ${payload.data.apellidos}`;
      state.photoURL = "";
      state.authToken = payload.data.token;
    },

    logout: (state, { payload }) => {
      state.status = "unauthenticated";
      state.userId = null;
      state.email = null;
      state.nombres = null;
      state.photoURL = null;
      state.token = null;
    },

    checkingCredentials: (state, payload) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
