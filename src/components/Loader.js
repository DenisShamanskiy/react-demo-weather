import React from "react";
import "./Loader.css";

export default function LoaderCardWeather({ height }) {
  const loaderContainer = {
    minHeight: height,
    margin: "2rem 0 0 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={loaderContainer}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
