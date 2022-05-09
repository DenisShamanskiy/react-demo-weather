export async function сurrentWeatherData(latitude, longitude) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  );
  const result = await response.json();
  return result;
}

export async function OneCallAPI(latitude, longitude) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  );

  const result = await response.json();
  //   const res = JSON.stringify(result);
  // console.log(result);
  //   console.log(res);
  return result;
}

export async function airPollutionAPI(latitude, longitude) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`
  );
  const result = await response.json();
  return result;
}
