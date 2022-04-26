import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/App";
import initApp from "./main/initializers/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
