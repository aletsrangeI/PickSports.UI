import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    darkmode: false,
    miniSideBar: false,
    maxSideBar: false,
  },

  reducers: {
    toggleDarkMode: (state, { payload }) => {
      state.darkmode = payload;
    },
    toggleMiniSideBar: (state, { payload }) => {
      state.miniSideBar = payload;
    },
    toggleMaxSideBar: (state, { payload }) => {
      state.maxSideBar = payload;
    },
  },
});

export const { toggleDarkMode, toggleMiniSideBar, toggleMaxSideBar } =
  uiSlice.actions;
