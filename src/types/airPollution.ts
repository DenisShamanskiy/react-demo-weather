export interface IAirPollutionState {
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

export interface airPollutionAction {
    type: "GET_DATA_AIRPOLLUTION",
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

