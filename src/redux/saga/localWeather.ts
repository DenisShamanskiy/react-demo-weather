// import { setCoordinates } from "redux/actions/actionCoordinates";
import { put, call, takeLeading } from "redux-saga/effects";
import getCurrentCoordinates from "utils/currentCoordinates";
// import { setAirPollution } from "redux/actions/actionAirPollution";
import { airPollutionAPI as requestAirPollution, oneCallAPI, сurrentWeatherAPI as requestCurrentWeather } from "utils/API";
import { getLocalWeather, hideLoading, setAirPollution, setCurrentWeather, setOneCall, showLoading } from "redux/actions";
import { AirPollutionState, Coordinates, CurrentWeatherState, OneCallState } from "redux/types";

export function* workerLocalWeather() {
  console.log("workerLocalWeather start");
  yield put(showLoading())
  const coordinates: Coordinates = yield call(getCurrentCoordinates);
  // yield put(setCoordinates(coordinates));
  const dataAirPollution: AirPollutionState = yield call(requestAirPollution, coordinates);
  const dataCurrentWeather: CurrentWeatherState = yield call(requestCurrentWeather, coordinates);
  const dataOneCall: OneCallState = yield call(oneCallAPI, coordinates);
  yield put(setAirPollution(dataAirPollution));
  yield put(setCurrentWeather(dataCurrentWeather));
  yield put(setOneCall(dataOneCall));
  yield put(hideLoading())
  console.log("workerLocalWeather finish");
}

export function* watcherLocalWeather() {
  yield takeLeading(getLocalWeather, workerLocalWeather);
}
