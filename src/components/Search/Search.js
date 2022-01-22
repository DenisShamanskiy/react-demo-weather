import { useState } from "react";
import "./Search.css";

export default function Search({ search }) {
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }
  function handleSubmit() {
    search(city);
  }

  return (
    <div className="search">
      <div className="input-group mb-3 input-group-sm">
        <input
          type="text"
          className="form-control"
          placeholder="В каком городе?"
          aria-label="city"
          aria-describedby="button-addon2"
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleSubmit}
        >
          Найти
        </button>
      </div>
    </div>
  );
}
