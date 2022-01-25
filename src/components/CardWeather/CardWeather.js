import React from "react";
import "./CardWeather.css";

export default function CardWeather({ dataWeather }) {
  //console.log(dataWeather);
  const {
    name: city,
    weather,
    main: { temp, temp_max, temp_min },
  } = dataWeather;
  const [data] = weather;
  const { description } = data;

  console.log(typeof description);

  return (
    <div className="card">
      <h1 className="card-city">{city}</h1>
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
