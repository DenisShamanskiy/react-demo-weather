import { AirPollutionState, SetAirPollition } from "redux/types"

const innitialState: AirPollutionState = {
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


export const airPollutionReducer = (state = innitialState, action: SetAirPollition): AirPollutionState => {
    switch (action.type) {

        case 'SET_AIR_POLLITION':
        return {...state, airPollution: action.payload}
  
      default:
        return state
    }
  
}



