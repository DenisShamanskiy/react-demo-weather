import React, { useEffect } from "react";
import "./CardWeatherList.css";

export default function CardWeatherList({ dataWeather }) {
  //console.log(dataWeather);

  const { list } = dataWeather;

  const result = list.filter((item) => item.dt_txt.includes("15:00:00"));

  function formateDate(arr) {
    const arrDay = [];

    for (let i = 0; i < arr.length; i++) {
      if (new Date(arr[i].dt_txt).getDay() === 0) {
        arrDay.push("Вс");
      } else if (new Date(arr[i].dt_txt).getDay() === 1) {
        arrDay.push("Пн");
      } else if (new Date(arr[i].dt_txt).getDay() === 2) {
        arrDay.push("Вт");
      } else if (new Date(arr[i].dt_txt).getDay() === 3) {
        arrDay.push("Ср");
      } else if (new Date(arr[i].dt_txt).getDay() === 4) {
        arrDay.push("Чт");
      } else if (new Date(arr[i].dt_txt).getDay() === 5) {
        arrDay.push("Пт");
      } else {
        arrDay.push("Сб");
      }
    }
    return arrDay;
  }
  const dayWeek = formateDate(result);
  // console.log(dayWeek);

  useEffect(() => {
    formateDate(result);
  }, [list]);

  return (
    <div className="card-list">
      <div className="card-header">
        <span className="svg-icon card-header-icon"></span>
        <h3 className="card-header-title">Прогноз на 5 дней</h3>
      </div>

      <ul className="card-list-group">
        {result.map(function (item, index) {
          return (
            <li key={index} className="card-list-group-item">
              <p className="card-list-group-item-day">{dayWeek[index]}</p>
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                className="card-list-group-item-icon"
                alt="Иконка погоды"
              />
              <p className="card-list-group-item-description">
                {item.weather[0].description[0].toUpperCase() +
                  item.weather[0].description.slice(1)}
              </p>
              <p className="card-list-group-item-temp">
                {Math.round(item.main.temp)}°
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
