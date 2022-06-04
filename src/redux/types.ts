// APP //
export interface AppState {
    loading: boolean
}

export enum ActionTypesApp {
    SHOW_LOADING = 'SHOW_LOADING',
    HIDE_LOADING = "HIDE_LOADING"
}

interface TypeShowLoading {
    type: ActionTypesApp.SHOW_LOADING,
    payload: boolean
}

interface TypeHideLoading {
    type: ActionTypesApp.HIDE_LOADING,
    payload: boolean
}

export type TypeActionApp = TypeShowLoading | TypeHideLoading

// AirPollution //

export interface AirPollutionState {
    airPollution: {
        components: {
            co: number
            nh3: number
            no: number
            no2: number
            o3: number
            pm2_5: number
            pm10: number
            so2: number
            },
        main: {
            aqi: number
        }
    }
}

export enum AirPollutionActionTypes {
    SET_AIR_POLLITION = 'SET_AIR_POLLITION',
    AXIOS_AIR_POLLITION = "AXIOS_AIR_POLLITION"
}

export interface SetAirPollition {
    type: "SET_AIR_POLLITION"
    payload: {
        components: {
        co: number
        nh3: number
        no: number
        no2: number
        o3: number
        pm2_5: number
        pm10: number
        so2: number
    },
    main: {
        aqi: number
    }
}
}

// Coordinates //

export type Coordinates = {
    latitude: number | null,
    longitude: number | null
}

export enum ActionTypesCoordinates {
SET_COORDINATES = 'SET_COORDINATES',
ASYNC_GET_COORDINATES = "ASYNC_GET_COORDINATES"
}

interface TypeSetCoordinates {
  type: ActionTypesCoordinates.SET_COORDINATES,
  payload: Coordinates
}

interface TypeAsyngGetCoordinates {
type: ActionTypesCoordinates.ASYNC_GET_COORDINATES,
}

export type TypeActionCoordinates = TypeSetCoordinates | TypeAsyngGetCoordinates

// Popup //

export interface PopupState {
    popup: boolean
}

export enum PopupActionTypes {
  VISIBILITY = "VISIBILITY",
  HIDDEN = "HIDDEN",
}

interface PopupActionVisibility {
    type: PopupActionTypes.VISIBILITY;
}

interface PopupActionHidden {
    type: PopupActionTypes.HIDDEN;
}

export type PopupAction = PopupActionVisibility | PopupActionHidden

// OneCall //

export interface CurrentWeatherState {
    currentWeather: {
        name: string,
        main: {
            temp: number,
            temp_max: number,
            temp_min: number,
            humidity: number,
            pressure: number,
            feels_like: number
        },
        weather: [{description: string}]
        visibility: number,
        timezone: number,
        wind: {
            speed: number,
            deg: number },
        sys: {
            sunrise: number,
            sunset: number },
        rain: {
            "1h": number
        },
        snow: {
            "1h": number
        }
      },
}

export interface OneCallState {
    OneCall: {
        alerts: any[],
        current: {
            uvi: number
        },
        daily: any[],
        hourly: any[]
        timezone_offset: number
    }
}

export interface SetCurrentWeather {
    type: "SET_CURRENT_WEATHER",
    payload: {
        name: string,
        main: {
            temp: number,
            temp_max: number,
            temp_min: number,
            humidity: number,
            pressure: number,
            feels_like: number
        },
        weather: [{description: string}]
        visibility: number,
        timezone: number,
        wind: {
            speed: number,
            deg: number },
        sys: {
            sunrise: number,
            sunset: number },
        rain: {
            "1h": number
        },
        snow: {
            "1h": number
        }
    }
}

export interface SetOneCall {
    type: "SET_ONE_CALL",
    payload: {
        alerts: any[],
        current: {
            uvi: number
        },
        daily: any[],
        hourly: any[]
        timezone_offset: number
      },
}
