import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Loader from "./components/Loader";

function App() {
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [data, setData] = useState([]);

  function getGeolocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }

  console.log(`Широта: ${latitude}`);
  console.log(`Долгота: ${longitude}`);

  useEffect(() => {
    getGeolocation();
    // const fetchData = async () => {
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     setLat(position.coords.latitude);
    //     setLong(position.coords.longitude);
    //   });
    //   await fetch(
    //     `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}&lang=ru`
    //   )
    //     .then((res) => res.json())
    //     .then((result) => {
    //       setData(result);
    //       //console.log(result);
    //     });
    // };
    // fetchData();
  }, [latitude, longitude]);

  return (
    <div className="main">
      {typeof data.main != "undefined" ? <Card data={data} /> : <Loader />}
    </div>
  );
}

export default App;
