import { InputGroup, Button, FormControl } from "react-bootstrap";
import { useState } from "react";
import "./InputGroup.css";

export default function InputGroup1({ search }) {
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }
  function handleSubmit() {
    search(city);
  }

  return (
    <InputGroup className="mb-3 input-group-2">
      <Button
        variant="outline-secondary"
        id="button-addon1"
        onClick={handleSubmit}
      >
        Найти город
      </Button>
      <FormControl
        value={city}
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"
        onChange={handleChange}
      />
    </InputGroup>
  );
}
