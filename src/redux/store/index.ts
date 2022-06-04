import { composeWithDevTools } from "@redux-devtools/extension";
import {compose, createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import { popupReducer } from "./popupReducer";
import { coordinatesReducer } from "./coordinatesReducer";
import { airPollutionReducer } from "./airPollutionReducer";
// import { watcherGetCoordinates } from "redux/saga/coordinatesSaga";
import { appReducer } from "./appReducer";
import { currentWeatherReducer } from "./currentWeatherReducer";
import { watcherLocalWeather } from "redux/saga/localWeather";
import { oneCallReducer } from "./oneCallReducer";
// import rootWatcher from "redux/saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    appReducer,
    popupReducer,
    airPollutionReducer,
    currentWeatherReducer,
    coordinatesReducer,
    oneCallReducer,
})

export const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), composeWithDevTools()))


export type RootState = ReturnType<typeof rootReducer>

// sagaMiddleware.run(rootWatcher)
sagaMiddleware.run(watcherLocalWeather)
