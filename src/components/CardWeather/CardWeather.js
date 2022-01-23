import React from "react";
import "./CardWeather.css";

export default function CardWeather({ dataWeather }) {
  //console.log(dataWeather);
  const {
    name: city,
    weather,
    main: { temp, temp_max, temp_min, feels_like },
  } = dataWeather;
  const [data] = weather;
  const { icon, description } = data;

  return (
    <div className="card-user">
      {/* <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        className="card-icon-weather"
        alt="Иконка погоды"
      /> */}
      <div className="card-body-user">
        <h5 className="card-title card-title-user">{city}</h5>
        <p className="card-text card-text-user">{Math.round(temp)}°</p>
        <p className="card-text">{description}</p>
        <p className="card-text">Ощущается как {Math.round(feels_like)}°</p>
        <p className="card-text">
          Макс.:
          {Math.round(temp_max)}° Мин.:
          {Math.round(temp_min)}°
        </p>
      </div>
    </div>
  );
}
