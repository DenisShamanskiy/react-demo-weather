import { composeWithDevTools } from "@redux-devtools/extension";
import {createStore, combineReducers} from "redux";
import { popupReducer } from "./popupReducer";
import { AirPollutionReducer } from "./AirPollutionReducer";

const rootReducer = combineReducers({
    popupReducer,
    AirPollutionReducer
})

export const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof rootReducer>