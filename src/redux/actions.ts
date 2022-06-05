import { StateAirPollution, StateCurrentWeather, StateOneCall } from "redux/types"
import { ACTION_CITY_WEATHER, ACTION_LOCAL_WEATHER, HIDE_LOADING, SET_AIR_POLLITION, SET_CURRENT_WEATHER, SET_ONE_CALL, SHOW_LOADING } from "./constants"

export const showLoading = () => ( { type: SHOW_LOADING } )

export const hideLoading = () => ( { type: HIDE_LOADING } )

export const getLocalWeather = () => ( { type: ACTION_LOCAL_WEATHER } )

export const getCityWeather = (payload: string) => ( { type: ACTION_CITY_WEATHER, payload } )

export const setAirPollution = (payload: StateAirPollution) => ({ type: SET_AIR_POLLITION, payload })

export const setCurrentWeather = (payload: StateCurrentWeather) => ({ type: SET_CURRENT_WEATHER, payload })

export const setOneCall = (payload: StateOneCall) => ({ type: SET_ONE_CALL, payload })