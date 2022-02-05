import React from "react";
import "./CardHourly.css";
import clock from "../../images/svg/clock.svg";
import timeFormate from "../../utils/timeFormate";

export default function CardHourly({ hourlyWeather, timeZone }) {
  // console.log(hourlyWeather);

  return (
    <div className="card-hourly">
      <div className="card-hourly-header">
        <img className="card-hourly-icon" src={clock} alt="Иконка погоды" />
        <h3 className="card-hourly-title">ПОЧАСОВОЙ ПРОГНОЗ</h3>
      </div>
      <ul className="card-hourly-info-container">
        {hourlyWeather.map(({ temp, weather, dt }, index) => {
          return (
            <li key={index} className="card-hourly-info-container-item">
              <p className="card-hourly-info-container-item-hour">
                {index === 0 ? "Сейчас" : timeFormate(dt, timeZone)}
              </p>
              <img
                className="div2"
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="Иконка погоды"
              />
              <p className="div3">{`${Math.round(temp)}°`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
