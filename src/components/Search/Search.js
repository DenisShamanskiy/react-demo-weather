import { useState } from "react";
import "./Search.css";

export default function Search({ search }) {
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  return (
    <form className="search">
      <input
        type="text"
        className="search-input"
        placeholder="В каком городе?"
        aria-label="city"
        aria-describedby="button-addon2"
        onChange={handleChange}
      />
      <button
        className="search-button"
        type="submit"
        id="button-addon2"
        onClick={handleSubmit}
      ></button>
    </form>
  );
}
