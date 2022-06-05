import { put, call, fork, takeLatest } from "redux-saga/effects";
import getCurrentCoordinates from "utils/currentCoordinates";
import { airPollutionAPI as requestAirPollution, oneCallAPI as requestOneCall, сurrentWeatherAPI as requestCurrentWeather } from "utils/API";
import { hideLoading, setAirPollution, setCurrentWeather, setOneCall, showLoading } from "redux/actions";
import { StateAirPollution, Coordinates, StateCurrentWeather, StateOneCall } from "redux/types";
import { ACTION_LOCAL_WEATHER } from "redux/constants";

function* handleAirPollution(coordinates: Coordinates) {
  const dataAirPollution: StateAirPollution = yield call(requestAirPollution, coordinates);
  yield put(setAirPollution(dataAirPollution));
}

function* handleCurrentWeather(coordinates: Coordinates) {
  const dataCurrentWeather: StateCurrentWeather = yield call(requestCurrentWeather, coordinates);
  yield put(setCurrentWeather(dataCurrentWeather));
}

function* handleOneCall(coordinates: Coordinates) {
  const dataOneCall: StateOneCall = yield call(requestOneCall, coordinates);
  yield put(setOneCall(dataOneCall));
}

export function* handleAllRequest(coordinates: Coordinates) {
  yield fork(handleAirPollution, coordinates)
  yield fork(handleCurrentWeather, coordinates)
  yield fork(handleOneCall, coordinates)
}

export function* workerLocalWeather() {
  yield put(showLoading())
  const coordinates: Coordinates = yield call(getCurrentCoordinates);
  yield call(handleAllRequest, coordinates)
  yield put(hideLoading())
}

export function* watcherLocalWeather() {
  yield takeLatest(ACTION_LOCAL_WEATHER, workerLocalWeather);
}
