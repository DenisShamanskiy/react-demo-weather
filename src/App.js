// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
//import WeatherAlert from "./components/AlertWeather/AlertWeather";
import CardWeather from "./components/CardWeather/CardWeather";
import CardWeatherList from "./components/CardWeatherList/CardWeatherList";
import Loader from "./components/Loader";
import Search from "./components/Search/Search";
import CardWeatherInfoContainer from "./components/CardWeatherInfoContainer/CardWeatherInfoContainer";

function App() {
  const [latitude, setLatitude] = useState(59.89444);
  const [longitude, setLongitude] = useState(30.26417);
  const [dataWeather, setDataWeather] = useState([]);
  const [data5DayWeather, set5DayWeather] = useState([]);
  const [er, setEr] = useState("");

  // console.log(dataWeather);
  // console.log(data5DayWeather);

  async function getWeatherCity(city) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    );
    const result = await response.json();
    setDataWeather(result);
    getWeatherCity5day(city);
  }
  async function getWeatherCity5day(city) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    );
    const result = await response.json();
    set5DayWeather(result);
  }

  // async function getWeatherCity(city) {
  //   try {
  //     const [qwer, asdf] = await Promise.all([
  //       fetch(
  //         `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  //       ),
  //       fetch(
  //         `${process.env.REACT_APP_API_URL}/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  //       ),
  //     ]);

  //     console.log(qwer, asdf);
  //     if (!qwer.ok || !asdf.ok) {
  //       console.log(qwer.status, asdf.status);
  //       const message = `Возникла ошибка`;
  //       throw new Error(message);
  //     }
  //     const dataW1 = await qwer.json();
  //     const data5DayWe1 = await asdf.json();

  //     setDataWeather(dataW1);
  //     set5DayWeather(data5DayWe1);
  //     // console.log(dataW1, data5DayWe1);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // function getWeatherCity(city) {
  //   fetch(
  //     `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setDataWeather(result);
  //       // console.log(result);
  //     });
  //   get5DayWeather(city);
  // }

  // function get5DayWeather(city) {
  //   fetch(
  //     `${process.env.REACT_APP_API_URL}/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       set5DayWeather(result);
  //       // console.log(result);
  //     });
  // }

  // console.log(`Широта: ${latitude}`);
  // console.log(`Долгота: ${longitude}`);

  // function getGeolocation() {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLatitude(position.coords.latitude);
  //     setLongitude(position.coords.longitude);
  //   });
  // }

  function getCoordinates() {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  }

  async function getPosition() {
    var position = await getCoordinates(); // wait for getPosition to complete
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);

    // console.log(`Широта: ${position.coords.latitude}`);
    // console.log(`Долгота: ${position.coords.longitude}`);
  }

  async function getWeatherGeolocation() {
    fetch(
      `${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}&lang=ru`
    )
      .then((res) => res.json())
      .then((result) => {
        setDataWeather(result);

        // console.log(result);
      });
    fetch(
      `${process.env.REACT_APP_API_URL}/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}&lang=ru`
    )
      .then((res) => res.json())
      .then((result) => {
        set5DayWeather(result);
        // console.log(result);
      });
  }

  useEffect(() => {
    getPosition();
    // getGeolocation();
    getWeatherGeolocation();
  }, [latitude, longitude]);

  return (
    <div className="main">
      {typeof dataWeather.main != "undefined" ? (
        <CardWeather dataWeather={dataWeather} search={getWeatherCity} />
      ) : (
        <Loader />
      )}
      <Search search={getWeatherCity} text={er} />
      {typeof data5DayWeather.list != "undefined" ? (
        <CardWeatherList dataWeather={data5DayWeather} />
      ) : (
        <Loader />
      )}
      {typeof dataWeather.main != "undefined" ? (
        <CardWeatherInfoContainer dataWeather={dataWeather} />
      ) : (
        <Loader />
      )}

      {/* <button onClick={() => getGeolocation()}>Получить геолокацию</button> */}
      {/* <button onClick={() => getWeatherGeolocation()}>#2</button> */}
    </div>
  );
}

export default App;
