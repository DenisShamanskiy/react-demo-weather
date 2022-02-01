import { useState } from "react";

import "./Search.css";

export default function Search({ search, text }) {
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  return (
    <>
      <form className="search">
        <input
          type="text"
          className="search-input"
          placeholder="В каком городе?"
          aria-label="city"
          aria-describedby="button-submit"
          autoComplete="on"
          onChange={handleChange}
        />
        <button
          className="search-button"
          type="submit"
          id="button-submit"
          onClick={handleSubmit}
        ></button>
      </form>
      <p>{text}</p>
    </>
  );
}
