import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={App()}></RouterProvider>
    <ToastContainer />
  </Provider>
);
