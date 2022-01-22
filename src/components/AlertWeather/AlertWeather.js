import React from "react";
import Alert from "react-bootstrap/Alert";

export default function weatherAlert() {
  const screenWidth = document.documentElement.clientWidth;
  const screenHeight = document.documentElement.clientHeight;
  return (
    <Alert variant="success">
      <Alert.Heading></Alert.Heading>
      <p>
        Ширина {screenWidth} Высота {screenHeight}
      </p>
    </Alert>
  );
}
