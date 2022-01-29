import "./CardWeatherInfoContainer.css";
import wind from "../../images/svg/wind.svg";
import moisture from "../../images/svg/moisture.svg";
import atmosphere from "../../images/svg/barometer.svg";
import sun from "../../images/svg/sunrise.svg";
import eye from "../../images/svg/visibility.svg";
import thermometer from "../../images/svg/thermometer.svg";
import fallout from "../../images/svg/fallout.svg";
import { useEffect, useState } from "react";

export default function CardWeatherInfoContainer({ dataWeather }) {
  console.log(dataWeather);
  const {
    visibility,
    wind: { speed },
    main: { humidity, pressure, feels_like },
    sys: { sunrise, sunset },
    rain,
    snow,
  } = dataWeather;

  const [precipitation, setPrecipitation] = useState("");

  function getWeatherPrecipitation() {
    if (rain) {
      // console.log(rain);
      setPrecipitation(`${rain["1h"]} мм`);
    } else if (snow) {
      // console.log(snow);
      setPrecipitation(`${snow["1h"]} мм`);
    }
  }

  const checkWeatherPrecipitation = () =>
    precipitation ? precipitation : "0 мм";

  useEffect(() => {
    getWeatherPrecipitation();
  });

  return (
    <div className="card-info-container">
      <div className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={thermometer} />
          <h3 className="card-info-title">Ощущается как</h3>
        </div>
        <div className="card-info-text">{`${Math.round(feels_like)}°`}</div>
      </div>

      <div className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={sun} />
          <h3 className="card-info-title">Восход солнца</h3>
        </div>
        <div className="card-info-text">{`${new Date(
          sunrise * 1000
        ).toLocaleString("ru-RU", {
          hour: "numeric",
          minute: "numeric",
        })}`}</div>
        <h3 className="card-info-title text_right">Закат</h3>
        <div className="card-info-text text_right">{`${new Date(
          sunset * 1000
        ).toLocaleString("ru-RU", {
          hour: "numeric",
          minute: "numeric",
        })}`}</div>
      </div>

      <div className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={fallout} />
          <h3 className="card-info-title">Осадки</h3>
        </div>
        <div className="card-info-text">{checkWeatherPrecipitation()}</div>
        <p className="card-info-title text_right">за последний час</p>
      </div>

      <div className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={eye} />
          <h3 className="card-info-title">Видимость</h3>
        </div>
        <div className="card-info-text">{`${visibility / 1000} км.`}</div>
      </div>

      <div className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={wind} />
          <h3 className="card-info-title">Ветер</h3>
        </div>
        <div className="card-info-text">{`${Math.round(speed)} м/с`}</div>
      </div>

      <div className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={moisture} />
          <h3 className="card-info-title">Влажность</h3>
        </div>
        <div className="card-info-text">{`${humidity} %`}</div>
      </div>

      <div className="card-info">
        <div className="card-info-header">
          <img className="svg-icon card-info-icon" src={atmosphere} />
          <h3 className="card-info-title">Давление</h3>
        </div>
        <div className="card-info-text">{`${Math.round(
          pressure * 0.75006375541921
        )} мм рт.ст.`}</div>
      </div>
    </div>
  );
}
