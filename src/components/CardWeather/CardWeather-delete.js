import React from "react";
import Card from "react-bootstrap/Card";
import "./CardWeather.css";
import InputGroup1 from "../InputGroup";

export default function WeatherCard({ dataWeather, search }) {
  return (
    <>
      <InputGroup1 search={search} />
      <Card bg="primary">
        <Card.Img
          variant="top"
          src={`http://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`}
          style={{
            width: "60px",
            height: "60px",
            // backgroundSize: "cover",
          }}
        />

        <Card.Body>
          <Card.Title className="card-title">{dataWeather.name}</Card.Title>
          <Card.Text style={{ fontSize: "4rem" }}>
            {Math.round(dataWeather.main.temp)}°
          </Card.Text>
          <Card.Text>{dataWeather.weather[0].description}</Card.Text>
          <Card.Text>
            Макс.:
            {Math.round(dataWeather.main.temp_max)}° Мин.:
            {Math.round(dataWeather.main.temp_min)}°
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
