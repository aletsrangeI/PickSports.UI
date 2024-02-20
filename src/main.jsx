import React from "react";
import ReactDOM from "react-dom/client";
import PickSports from "./PickSports";
import "./styles/normalize.css"
import "./styles/styles.css"
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PickSports />
    </BrowserRouter>
  </React.StrictMode>
);
