import React from "react";
import ReactDOM from "react-dom/client";
import PickSports from "./PickSports";
import "./styles/normalize.css";
import "./styles/styles.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <PickSports />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
