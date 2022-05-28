import { composeWithDevTools } from "@redux-devtools/extension";
import {createStore, combineReducers} from "redux";
import { popupReducer } from "./popupReducer";

const rootReducer = combineReducers({
    popup: popupReducer
})

export const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof rootReducer>