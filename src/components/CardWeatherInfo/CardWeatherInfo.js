import "./CardWeatherInfo.css";
import wind from "../../images/svg/wind.svg";
import moisture from "../../images/svg/moisture.svg";
import atmosphere from "../../images/svg/barometer.svg";
import sun from "../../images/svg/sunrise.svg";
import eye from "../../images/svg/visibility.svg";
import thermometer from "../../images/svg/thermometer.svg";
import fallout from "../../images/svg/fallout.svg";
import uv from "../../images/svg/sun.svg";
import { useEffect, useState } from "react";
import timeFormate from "../../utils/timeFormate";

export default function CardWeatherInfo({ dataWeather }) {
  // console.log(dataWeather);
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

  // console.log(timezone);

  const [precipitation, setPrecipitation] = useState("0 мм");

  const getWeatherPrecipitation = () =>
    rain
      ? setPrecipitation(`${rain["1h"]} мм`)
      : snow
      ? setPrecipitation(`${snow["1h"]} мм`)
      : setPrecipitation("0 мм");

  useEffect(() => {
    getWeatherPrecipitation();
  });

  return (
    <ul className="forecast-info">
      <li className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={uv} />
          <h3 className="card-info-title">УФ-ИНДЕКС</h3>
        </div>
        <div className="card-info-text">{uvi}</div>
      </li>

      <li className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={sun} />
          <h3 className="card-info-title">ВОСХОД СОЛНЦА</h3>
        </div>
        <div className="card-info-text">{timeFormate(sunrise, timezone)}</div>
        <h3 className="card-info-title text_right">ЗАКАТ</h3>
        <div className="card-info-text text_right">
          {timeFormate(sunset, timezone)}
        </div>
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
        <div className="card-info-text">{precipitation}</div>
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
