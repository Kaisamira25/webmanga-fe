import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Views from "./View";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Views />
    </BrowserRouter>
  </React.StrictMode>
);
