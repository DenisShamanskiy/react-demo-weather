import React from "react";
import "./CardHourly.css";
import ScrollHorizontal from "../ScrollHorizontal";
import clock from "../../images/svg/clock.svg";
import timeFormate from "../../utils/timeFormate";

export default function CardHourly({ hourlyWeather, timeZone }) {
  // console.log(hourlyWeather);

  return (
    <article className="forecast-hourly">
      <div className="forecast-hourly-header">
        <img className="forecast-hourly-icon" src={clock} alt="Иконка часов" />
        <h2 className="forecast-hourly-title">ПОЧАСОВОЙ ПРОГНОЗ</h2>
      </div>
      <ScrollHorizontal class={"forecast-hourly-list"}>
        {hourlyWeather.map(({ temp, weather, dt }, index) => {
          return (
            <li key={index} className="forecast-hourly-item">
              <p className="forecast-hourly-item-hour">
                {index === 0 ? "Сейчас" : timeFormate(dt, timeZone)}
              </p>
              <img
                className="forecast-hourly-item-icon"
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="Иконка погоды"
              />
              <p className="forecast-hourly-item-temp">{`${Math.round(
                temp
              )}°`}</p>
            </li>
          );
        })}
      </ScrollHorizontal>
    </article>
  );
}
