import React from "react";
import Card from "react-bootstrap/Card";
import InputGroup1 from "./InputGroup";

export default function weatherCard({ data, search }) {
  return (
    <>
      <InputGroup1 search={search} />
      <Card
        bg="primary"
        style={{ width: "20rem", height: "20rem", borderRadius: "15px" }}
      >
        <Card.Img
          variant="top"
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          style={{
            width: "60px",
            height: "60px",
            backgroundSize: "cover",
          }}
        />
        <Card.Body>
          <Card.Title className="card-title">{data.name}</Card.Title>
          <Card.Text style={{ fontSize: "4rem" }}>
            {Math.round(data.main.temp)}°
          </Card.Text>
          <Card.Text>{data.weather[0].description}</Card.Text>
          <Card.Text>
            Макс.:
            {Math.round(data.main.temp_max)}° Мин.:
            {Math.round(data.main.temp_min)}°
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
