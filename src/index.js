import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
