import { toggleDarkMode, toggleMaxSideBar, toggleMiniSideBar } from "./uiSlice";

export const changingTheme = (payload) => {
  return async (dispatch) => {
    console.log(payload);
    dispatch(toggleDarkMode(payload));
  };
};

export const changingMiniSideBar = (payload) => {
  return async (dispatch) => {
    dispatch(toggleMiniSideBar(payload));
  };
};

export const changingMaxSideBar = (payload) => {
  return async (dispatch) => {
    dispatch(toggleMaxSideBar(payload));
  };
};
