import React, { useEffect } from "react";
import "./ListCardWeather.css";

export default function ListCardWeather({ dataWeather }) {
  //console.log(dataWeather);

  const { list } = dataWeather;
  //console.log(list);
  // const arrDay = [];

  const result = list.filter((item) => item.dt_txt.includes("15:00:00"));
  //console.log(result);
  const [first, second, third, fourth, fifth] = result;
  console.log(first, second, third, fourth, fifth);

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
  console.log(formateDate(dayWeek));

  useEffect(() => {
    formateDate(list);
  }, [list]);

  return (
    <div className="card">
      <div className="card-header">Прогноз на 5 дней</div>

      <ul className="list-group list-group-flush flex">
        {result.map(function (item, index) {
          return (
            <li
              key={index}
              className="list-group-item list-group-item-user grid"
            >
              <p className="list-text-user">{dayWeek[index]}</p>
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                className="card-img-top list-size"
                alt="Иконка погоды"
              />
              <p className="list-text-user text-size g-col-4">
                {item.weather[0].description}
              </p>
              <p className="list-text-user">{Math.round(item.main.temp)}°</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
