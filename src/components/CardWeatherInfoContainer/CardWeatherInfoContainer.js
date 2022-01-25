import CardWeatherInfo from "../CardWeatherInfo/CardWeatherInfo.js";
import "./CardWeatherInfoContainer.css";
import wind from "../../images/svg/wind.svg";
import moisture from "../../images/svg/moisture.svg";
import atmosphere from "../../images/svg/barometer.svg";
import sun from "../../images/svg/sunrise.svg";
import eye from "../../images/svg/visibility.svg";
import thermometer from "../../images/svg/thermometer.svg";

export default function CardWeatherInfoContainer({ dataWeather }) {
  const {
    visibility,
    wind: { speed },
    main: { humidity, pressure, feels_like },
    sys: { sunrise, sunset },
  } = dataWeather;
  console.log(dataWeather);
  //   console.log(humidity);

  let time = 1643092089;

  return (
    <div className="card-info-container">
      <CardWeatherInfo
        title="Ветер"
        description={`${Math.round(speed)} м/с`}
        img={wind}
      />
      <CardWeatherInfo
        title="Влажность"
        description={`${humidity} %`}
        img={moisture}
      />
      <CardWeatherInfo
        title="Давление"
        description={`${Math.round(pressure * 0.75006375541921)} мм рт.ст.`}
        img={atmosphere}
      />
      <CardWeatherInfo
        title="Восход солнца"
        description={`${new Date(sunrise * 1000).toLocaleString("ru-RU", {
          hour: "numeric",
          minute: "numeric",
        })}`}
        title_min={"Закат"}
        description_min={`${new Date(sunset * 1000).toLocaleString("ru-RU", {
          hour: "numeric",
          minute: "numeric",
        })}`}
        img={sun}
      />
      <CardWeatherInfo
        title="Ощущается как"
        description={`${Math.round(feels_like)}°`}
        img={thermometer}
      />
      <CardWeatherInfo
        title="Видимость"
        description={`${visibility / 1000} км.`}
        img={eye}
      />
    </div>
  );
}
