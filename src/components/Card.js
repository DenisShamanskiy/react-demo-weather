import React from "react";

export default function Card(data) {
  console.log(data);
  return (
    <div className="card">
      <p>{data.data.name}</p>

      <p>{data.data.main.feels_like}</p>
      <p>Температура: {Math.round(data.data.main.temp)} градусов</p>
    </div>
  );
}
