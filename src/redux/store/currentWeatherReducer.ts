import { CurrentWeatherState, SetCurrentWeather } from "redux/types"

const innitialState: CurrentWeatherState = {
    currentWeather: {
        name: "",
        main: {
            temp: 0,
            temp_max: 0,
            temp_min: 0,
            humidity: 0,
            pressure: 0,
            feels_like: 0
        },
        weather: [{description: ""}],
        visibility: 0,
        timezone: 0,
        wind: {
            speed: 0,
            deg: 0 },
        sys: {
            sunrise: 0,
            sunset: 0 },
        rain: {
            "1h": 0,
        },
        snow: {
            "1h": 0,
        }
      },
}


export const currentWeatherReducer = (state = innitialState, action: SetCurrentWeather): CurrentWeatherState => {
    switch (action.type) {

        case "SET_CURRENT_WEATHER":
        return {...state, currentWeather: action.payload}
  
      default:
        return state
    }
  
}
