import { ActionTypesApp, AirPollutionState, CurrentWeatherState, OneCallState } from "redux/types"

export const showLoading = () => ( { type: ActionTypesApp.SHOW_LOADING } )

export const hideLoading = () => ( { type: ActionTypesApp.HIDE_LOADING } )

export const getLocalWeather = () => ( { type: "ACTION_LOCAL_WEATHER" } )

export const getCityWeather = (payload: string) => ( { type: "ACTION_CITY_WEATHER", payload } )

export const setAirPollution = (payload: AirPollutionState) => ({ type: "SET_AIR_POLLITION", payload })

export const setCurrentWeather = (payload: CurrentWeatherState) => ({ type: "SET_CURRENT_WEATHER", payload })

export const setOneCall = (payload: OneCallState) => ({ type: "SET_ONE_CALL", payload })