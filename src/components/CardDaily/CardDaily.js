import React from "react";
import "./CardDaily.css";
import calendar from "../../images/svg/calendar.svg";
import formateDayWeek from "../../utils/formateDayWeek";
import formatePrecipitation from "../../utils/formatePrecipitation";

export default function CardDaily({ dataWeather }) {
  // console.log(dataWeather);

  return (
    <article className="forecast-daily">
      <div className="forecast-daily-header">
        <img
          className="forecast-daily-icon"
          src={calendar}
          alt="Иконка календаря"
        />
        <h3 className="forecast-daily-title">ПРОГНОЗ НА 7 ДНЕЙ</h3>
      </div>

      <ul className="forecast-daily-list">
        {dataWeather.map(({ temp: { max, min }, weather, dt, pop }, index) => {
          return (
            <li key={index} className="forecast-daily-item">
              <p className="forecast-daily-item-day">
                {index === 0
                  ? "Сегодня"
                  : index === 1
                  ? "Завтра"
                  : formateDayWeek(dt)}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                className="forecast-daily-item-icon"
                alt="Иконка погоды"
              />
              <div className="forecast-daily-item-description-container">
                <p className="forecast-daily-item-description">
                  {weather[0].description[0].toUpperCase() +
                    weather[0].description.slice(1)}
                </p>
                <p className="forecast-daily-item-description-precipitation">
                  {pop !== 0 ? formatePrecipitation(pop) : ""}
                </p>
              </div>
              <p className="forecast-daily-item-temp">{Math.round(min)}°</p>
              <p className="forecast-daily-item-temp">{Math.round(max)}°</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
