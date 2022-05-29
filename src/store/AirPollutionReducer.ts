import { IAirPollutionState, airPollutionAction } from "types/airPollution"

const innitialState: IAirPollutionState = {
  airPollution: {
    components: {
      co: 0,
      nh3: 0,
      no: 0,
      no2: 0,
      o3: 0,
      pm2_5: 0,
      pm10: 0,
      so2: 0
    },
    main: {
      aqi: 0
    }
  }
}

export const AirPollutionReducer = (state = innitialState, action: airPollutionAction): IAirPollutionState => {
    switch (action) {
        
      case action:
        return {...state, airPollution: action.payload}
  
      default:
        return state
    }
  
}

export const getAirPollution = (payload: airPollutionAction) => ({type: "GET_DATA_AIRPOLLUTION", payload})