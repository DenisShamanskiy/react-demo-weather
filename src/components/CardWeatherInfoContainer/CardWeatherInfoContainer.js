import CardWeatherInfo from "../CardWeatherInfo/CardWeatherInfo.js";
import "./CardWeatherInfoContainer.css";
import wind from "../../images/svg/wind.svg";
import water from "../../images/svg/water.svg";
import atmosphere from "../../images/svg/pressure.svg";

export default function CardWeatherInfoContainer({ dataWeather }) {
  const {
    wind: { speed },
    main: { humidity, pressure },
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
        img={water}
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
        img={atmosphere}
      />
    </div>
  );
}
