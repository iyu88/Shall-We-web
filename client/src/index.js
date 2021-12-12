import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./customColor.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { AuthContextProvider } from "../src/context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
