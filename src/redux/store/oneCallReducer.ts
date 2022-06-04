// import { AirPollutionState, SetAirPollition } from "redux/types/airPollution"

import { OneCallState, SetOneCall } from "redux/types"

const innitialState: OneCallState = {
  OneCall: {
    alerts: [],
    current: {
      uvi: 0
    },
    daily: [],
    hourly: [],
    timezone_offset: 0
  }
}


export const oneCallReducer = (state = innitialState, action: SetOneCall): OneCallState => {
    switch (action.type) {

        case "SET_ONE_CALL":
        return {...state, OneCall: action.payload}
  
      default:
        return state
    }
  
}
