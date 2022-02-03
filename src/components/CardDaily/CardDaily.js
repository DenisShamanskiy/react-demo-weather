import React, { useEffect } from "react";
import "./CardDaily.css";
import calendar from "../../images/svg/calendar.svg";

export default function CardDaily({ dataWeather }) {
  // console.log(dataWeather);

  function getWeekDay(date) {
    let days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

    return days[new Date(date * 1000).getDay()];
  }

  return (
    <div className="card-daily">
      <div className="card-daily-header">
        <img
          className="card-daily-icon"
          src={calendar}
          alt="Иконка календаря"
        />
        <h3 className="card-daily-title">ПРОГНОЗ НА 7 ДНЕЙ</h3>
      </div>

      <ul className="card-daily-list">
        {dataWeather.map(({ temp: { max, min }, weather, dt, pop }, index) => {
          return (
            <li key={index} className="card-daily-list-item">
              <p className="card-daily-list-item-day">
                {index === 0
                  ? "Сегодня"
                  : index === 1
                  ? "Завтра"
                  : getWeekDay(dt)}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                className="card-daily-list-item-icon"
                alt="Иконка погоды"
              />
              <div className="card-daily-list-item-description-container">
                <p className="card-daily-list-item-description">
                  {weather[0].description[0].toUpperCase() +
                    weather[0].description.slice(1)}
                </p>
                <p className="card-daily-list-item-description-precipitation">
                  {pop !== 0 ? `${pop * 100}%` : ""}
                </p>
              </div>
              <p className="card-daily-list-item-temp">{Math.round(min)}°</p>
              <p className="card-daily-list-item-temp">{Math.round(max)}°</p>
            </li>
          );
        })}
      </ul>

      {/* <ul className="card-daily-list">
        {dataWeather.map(({ temp: {day}, weather, dt }, index) => {
          return (
            <li key={index} className="card-daily-list-item">
              <p className="card-daily-list-item-day">Сегодня</p>
              <img
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                className="card-daily-list-item-icon"
                alt="Иконка погоды"
              />
              <p className="card-daily-list-item-description">
                {weather[0].description[0].toUpperCase() +
                  weather[0].description.slice(1)}
              </p>
              <p className="card-daily-list-item-temp">
                {Math.round(day)}°
              </p>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}
