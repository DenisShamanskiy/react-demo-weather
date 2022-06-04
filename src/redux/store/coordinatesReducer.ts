import { Coordinates, ActionTypesCoordinates, TypeActionCoordinates } from "redux/types";

const innitialState: Coordinates = {
  latitude: null,
  longitude: null
}


export const coordinatesReducer = (state = innitialState, action: TypeActionCoordinates): Coordinates => {
    switch (action.type) {
      
      case ActionTypesCoordinates.SET_COORDINATES:
        return {
          
          ...state,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude
        }

      default:
        return state
    }
  
}

