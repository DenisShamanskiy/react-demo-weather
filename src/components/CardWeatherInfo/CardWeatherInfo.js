import React from "react";
import "./CardWeatherInfo.css";
import wind from "../../images/svg/wind.svg";
import moisture from "../../images/svg/moisture.svg";
import atmosphere from "../../images/svg/barometer.svg";
import sun from "../../images/svg/sunrise.svg";
import eye from "../../images/svg/visibility.svg";
import thermometer from "../../images/svg/thermometer.svg";
import fallout from "../../images/svg/fallout.svg";
import uv from "../../images/svg/sun.svg";
// import timeFormate from "../../utils/timeFormate";
import formate from "../../utils/formate";

export default function CardWeatherInfo({ dataWeather }) {
  const {
    uvi,
    visibility,
    timezone,
    wind: { speed },
    main: { humidity, pressure, feels_like },
    sys: { sunrise, sunset },
    rain,
    snow,
  } = dataWeather;

  const getPrecipitation = () =>
    rain ? `${rain["1h"]} мм` : snow ? `${snow["1h"]} мм` : "0 мм";

  function getUviDescription(u) {
    if (u < 3) {
      return "Низкий";
    } else if (u >= 3 && u < 6) {
      return "Умеренный";
    } else if (u >= 6 && u <= 8) {
      return "Высокий";
    } else if (u >= 8 && u <= 11) {
      return "Очень высокий";
    }
    return "Чрезмерный";
  }

  return (
    <ul className="forecast-info">
      <li className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={uv} />
          <h3 className="card-info-title">УФ-ИНДЕКС</h3>
        </div>
        <p className="card-info-text">{uvi}</p>
        <p className="card-info-description">{getUviDescription(uvi)}</p>
        <input
          readOnly={true}
          type="range"
          min="0"
          max="13"
          value={uvi}
        ></input>
      </li>

      <li className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={sun} />
          <h3 className="card-info-title">ВОСХОД СОЛНЦА</h3>
        </div>
        <div className="card-info-text">{formate.time(sunrise, timezone)}</div>
        <p className="card-info-description">{`Заход ${formate.time(
          sunset,
          timezone
        )}`}</p>
      </li>

      <li className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={wind} />
          <h3 className="card-info-title">ВЕТЕР</h3>
        </div>
        <div className="card-info-text">{`${Math.round(speed)} м/с`}</div>
      </li>

      <li className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={fallout} />
          <h3 className="card-info-title">
            {rain ? "ДОЖДЬ" : snow ? "СНЕГ" : "ОСАДКОВ НЕТ"}
          </h3>
        </div>
        <div className="card-info-text">{getPrecipitation()}</div>
        <p className="card-info-title text_right">за последний час</p>
      </li>

      <li className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={thermometer} />
          <h3 className="card-info-title">ОЩУЩАЕТСЯ КАК</h3>
        </div>
        <div className="card-info-text">{`${Math.round(feels_like)}°`}</div>
      </li>

      <li className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={moisture} />
          <h3 className="card-info-title">ВЛАЖНОСТЬ</h3>
        </div>
        <div className="card-info-text">{`${humidity} %`}</div>
      </li>

      <li className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={eye} />
          <h3 className="card-info-title">ВИДИМОСТЬ</h3>
        </div>
        <div className="card-info-text">{`${visibility / 1000} км.`}</div>
      </li>

      <li className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={atmosphere} />
          <h3 className="card-info-title">ДАВЛЕНИЕ</h3>
        </div>
        <div className="card-info-text">{`${Math.round(
          pressure * 0.75006375541921
        )} мм рт.ст.`}</div>
      </li>
    </ul>
  );
}
