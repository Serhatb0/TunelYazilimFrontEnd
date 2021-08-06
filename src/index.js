import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap-select/dist/js/bootstrap-select.min.js';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'jquery/dist/jquery.min.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    {" "}
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
