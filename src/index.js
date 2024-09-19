import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating max={8} color="#fcc419" size={25} />
    <StarRating max={6} color="blue" size={45} />
    <StarRating color={"red"} /> */}
  </React.StrictMode>
);
