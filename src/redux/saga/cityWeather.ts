// import { setCoordinates } from "redux/actions/actionCoordinates";
import { put, call, takeLeading } from "redux-saga/effects";
import { airPollutionAPI as requestAirPollution, getCityCoordinates, oneCallAPI, сurrentWeatherAPI as requestCurrentWeather } from "utils/API";
import { getCityWeather, hideLoading, setAirPollution, setCurrentWeather, setOneCall, showLoading } from "redux/actions";
import { AirPollutionState, Coordinates, CurrentWeatherState, OneCallState } from "redux/types";

export function* workerCityWeather(action: {payload: string}) {
    console.log("workerCityWeather start");

    yield put(showLoading())
    const coordinates: Coordinates = yield call(getCityCoordinates, action.payload);
    // yield put(setCoordinates(coordinates));
    const dataAirPollution: AirPollutionState = yield call(requestAirPollution, coordinates);
    const dataCurrentWeather: CurrentWeatherState = yield call(requestCurrentWeather, coordinates);
    const dataOneCall: OneCallState = yield call(oneCallAPI, coordinates);
    yield put(setAirPollution(dataAirPollution));
    yield put(setCurrentWeather(dataCurrentWeather));
    yield put(setOneCall(dataOneCall));
    yield put(hideLoading())

    console.log("workerCityWeather finish");
}

export function* watcherCityWeather() {
  yield takeLeading(getCityWeather, workerCityWeather);
}