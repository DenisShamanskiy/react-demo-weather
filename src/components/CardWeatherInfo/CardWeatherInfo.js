import React, { useEffect } from "react";
import "./CardWeatherInfo.css";

export default function CardWeatherInfo({ dataWeather }) {
  const {
    wind: { speed },
  } = dataWeather;
  console.log(dataWeather);
  console.log(speed);

  //   useEffect(() => {
  //     formateDate(list);
  //   }, [list]);

  return (
    <div className="card-info">
      <div className="card-info-header">
        <span className="svg-icon card-info-icon"></span>
        <h3 className="card-info-title">Ветер</h3>
      </div>
      <div className="card-info-text">{Math.round(speed)} м/с</div>
    </div>
  );
}
