import React, { useState } from "react";
import { StyledSearch, Input, Button } from "../styles/StyledSearch";

interface SearchProps {
  getCityWeather(city: string): void
}

export const Search: React.FC<SearchProps> = (props) => {
  const [city, setCity] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }
  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    props.getCityWeather(city.trim())
    setCity("");
    
  }

  return (
    <>
      <StyledSearch role="search">
        <Input
          type="search"
          value={city}
          placeholder="В каком городе?"
          onChange={handleChange}
          required
        />
        <Button type="submit" onClick={handleSubmit}></Button>
      </StyledSearch>
    </>
  );
}
