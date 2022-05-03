import { useState } from "react";
import { StyledSearch, Input, Button } from "../styles/StyledSearch";

export default function Search({ search }) {
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city.trim());
    setCity("");
  }

  return (
    <>
      <StyledSearch role="search">
        <Input
          type="search"
          value={city}
          placeholder="В каком городе?"
          autocomplete="on"
          onChange={handleChange}
          required
        />
        <Button type="submit" onClick={handleSubmit}></Button>
      </StyledSearch>
    </>
  );
}
