import React from "react";
import "./CardWeather.css";

export default function CardWeather({ currentWeather }) {
  // console.log(currentWeather);
  const {
    name,
    main: { temp, temp_max, temp_min },
    weather,
  } = currentWeather;
  const [data] = weather;
  const { description } = data;
  // console.log(name, temp, temp_max, temp_min, description);

  return (
    <div className="card">
      <h1 className="card-city">{name}</h1>
      <p className="card-temp">{Math.round(temp)}°</p>
      <p className="card-description">
        {description[0].toUpperCase() + description.slice(1)}
      </p>

      <p className="card-description">
        Макс.: {Math.round(temp_max)}° Мин.: {Math.round(temp_min)}°
      </p>
    </div>
  );
}
