import { PopupAction, PopupActionTypes, PopupState } from "redux/types"

const innitialState: PopupState = {
    popup: false
  }

export const popupReducer = (state = innitialState, action: PopupAction): PopupState => {
    switch (action.type) {
        
      case PopupActionTypes.VISIBILITY:
        return {...state, popup: true}
  
      case PopupActionTypes.HIDDEN:
        return {...state, popup: false}
  
      default:
        return state
    }
  
  }