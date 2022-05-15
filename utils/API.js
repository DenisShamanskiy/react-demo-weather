"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.geocodingAPI = exports.airPollutionAPI = exports.oneCallAPI = exports.сurrentWeatherAPI = void 0;
const axios = require("axios").default;
function сurrentWeatherAPI(latitude, longitude) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios({
                url: "https://api.openweathermap.org/data/2.5/weather",
                params: {
                    lat: latitude,
                    lon: longitude,
                    units: "metric",
                    lang: "ru",
                    appid: process.env.REACT_APP_API_KEY,
                },
            });
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.сurrentWeatherAPI = сurrentWeatherAPI;
function oneCallAPI(latitude, longitude) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios({
                url: "https://api.openweathermap.org/data/2.5/onecall",
                params: {
                    lat: latitude,
                    lon: longitude,
                    exclude: "minutely",
                    units: "metric",
                    lang: "ru",
                    appid: process.env.REACT_APP_API_KEY,
                },
            });
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.oneCallAPI = oneCallAPI;
function airPollutionAPI(latitude, longitude) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios({
                url: "https://api.openweathermap.org/data/2.5/air_pollution",
                params: {
                    lat: latitude,
                    lon: longitude,
                    appid: process.env.REACT_APP_API_KEY,
                },
            });
            return response.data.list[0];
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.airPollutionAPI = airPollutionAPI;
function geocodingAPI(city) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios({
                url: "https://api.openweathermap.org/geo/1.0/direct",
                params: {
                    q: city,
                    limit: 1,
                    appid: process.env.REACT_APP_API_KEY,
                },
            });
            const { lat, lon } = response.data[0];
            return [lat, lon];
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.geocodingAPI = geocodingAPI;
