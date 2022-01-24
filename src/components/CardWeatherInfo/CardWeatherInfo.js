import React from "react";
import "./CardWeatherInfo.css";

export default function CardWeatherInfo({
  title,
  title_min,
  description,
  description_min,
  img,
}) {
  return (
    <div className="card-info">
      <div className="card-info-header">
        <img className="svg-icon card-info-icon" src={img} />
        <h3 className="card-info-title">{title}</h3>
      </div>
      <div className="card-info-text">{description}</div>
      <h3 className="card-info-title">{title_min}</h3>
      <div className="card-info-text">{description_min}</div>
    </div>
  );
}
