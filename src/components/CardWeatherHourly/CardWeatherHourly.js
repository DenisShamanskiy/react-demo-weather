import React from "react";
import "./CardWeatherHourly.css";
import clock from "../../images/svg/clock.svg";
import thermometer from "../../images/svg/thermometer.svg";

export default function CardWeatherHourly({ hourlyWeather }) {
  //   console.log(hourlyWeather);
  //   const a = hourlyWeather.map((item) => item.weather[0].icon);
  //   console.log(a);

  //   const {
  //     name,
  //     main: { temp, temp_max, temp_min },
  //     weather,
  //   } = currentWeather;
  //   const [data] = weather;
  //   const { description } = data;
  //   // console.log(name, temp, temp_max, temp_min, description);

  return (
    <div className="card-weather-hourly">
      <div className="card-weather-hourly-header">
        <img className="card-weather-hourly-icon" src={clock} />
        <h3 className="card-weather-hourly-title">ПОЧАСОВОЙ ПРОГНОЗ</h3>
      </div>
      <ul className="card-weather-hourly-info-container">
        {hourlyWeather.map(({ temp, weather, dt }, index) => {
          return (
            <li key={index} className="card-weather-hourly-info-container-item">
              <p className="card-weather-hourly-info-container-item-hour">
                {index === 0
                  ? "Сейчас"
                  : `${new Date(dt * 1000).toLocaleString("ru-RU", {
                      hour: "numeric",
                      minute: "numeric",
                    })}`}
              </p>
              <img
                className="div2"
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              />
              <p className="div3">{`${Math.round(temp)}°`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
