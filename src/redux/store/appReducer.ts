import { ActionTypesApp, AppState, TypeActionApp } from "redux/types"

const innitialState: AppState = {
    loading: true
}

export const appReducer = (state = innitialState, action: TypeActionApp): AppState => {
    switch (action.type) {
        
      case ActionTypesApp.SHOW_LOADING:
        return {...state, loading: true}
  
      case ActionTypesApp.HIDE_LOADING:
        return {...state, loading: false}

      default:
        return state
    }
  
  }