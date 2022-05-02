import { useState } from "react";
import { StyledSearch, Input, Button } from "../styles/StyledSearch";

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
    <>
      <StyledSearch>
        <Input
          type="text"
          placeholder="В каком городе?"
          aria-label="city"
          aria-describedby="button-submit"
          autoComplete="on"
          onChange={handleChange}
        />
        <Button
          type="submit"
          id="button-submit"
          onClick={handleSubmit}
        ></Button>
      </StyledSearch>
    </>
  );
}
