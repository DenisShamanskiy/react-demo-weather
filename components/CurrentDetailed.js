"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const StyledCurrentDetailed_1 = require("../styles/StyledCurrentDetailed");
const formate_1 = __importDefault(require("../utils/formate"));
function CardWeatherInfo({ dataWeather }) {
    const { uvi, visibility, timezone, wind: { speed, deg }, main: { humidity, pressure, feels_like }, sys: { sunrise, sunset }, rain, snow, } = dataWeather;
    const getPrecipitation = () => rain ? `${rain["1h"]} мм` : snow ? `${snow["1h"]} мм` : "0 мм";
    function getUviDescription(u) {
        if (u < 3) {
            return "Низкий";
        }
        else if (u >= 3 && u < 6) {
            return "Умеренный";
        }
        else if (u >= 6 && u <= 8) {
            return "Высокий";
        }
        else if (u >= 8 && u <= 11) {
            return "Очень высокий";
        }
        return "Чрезмерный";
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(StyledCurrentDetailed_1.Card, { children: [(0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Title, Object.assign({ icon: "Uv" }, { children: "\u0423\u0424-\u0418\u041D\u0414\u0415\u041A\u0421" })), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Text, { children: uvi }), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Description, { children: getUviDescription(uvi) }), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Input, { readOnly: true, type: "range", min: "0", max: "13", value: uvi })] }), (0, jsx_runtime_1.jsxs)(StyledCurrentDetailed_1.Card, { children: [(0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Title, Object.assign({ icon: "Sun" }, { children: "\u0412\u041E\u0421\u0425\u041E\u0414 \u0421\u041E\u041B\u041D\u0426\u0410" })), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Text, { children: formate_1.default.time(sunrise, timezone) }), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Description, { children: `Заход ${formate_1.default.time(sunset, timezone)}` })] }), (0, jsx_runtime_1.jsxs)(StyledCurrentDetailed_1.Card, { children: [(0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Title, Object.assign({ icon: "Wind" }, { children: "\u0412\u0415\u0422\u0415\u0420" })), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Text, { children: `${Math.round(speed)} м/с` }), (0, jsx_runtime_1.jsxs)(StyledCurrentDetailed_1.Compass, { children: [(0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.North, { children: "N" }), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.East, { children: "E" }), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.West, { children: "W" }), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.South, { children: "S" }), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.CompassArrow, { deg: deg })] })] }), (0, jsx_runtime_1.jsxs)(StyledCurrentDetailed_1.Card, { children: [(0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Title, Object.assign({ icon: "Fallout" }, { children: rain ? "ДОЖДЬ" : snow ? "СНЕГ" : "ОСАДКОВ НЕТ" })), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Text, { children: getPrecipitation() }), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.TextRight, { children: "\u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0447\u0430\u0441" })] }), (0, jsx_runtime_1.jsxs)(StyledCurrentDetailed_1.Card, { children: [(0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Title, Object.assign({ icon: "Thermometer" }, { children: "\u041E\u0429\u0423\u0429\u0410\u0415\u0422\u0421\u042F \u041A\u0410\u041A" })), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Text, { children: `${Math.round(feels_like)}°` })] }), (0, jsx_runtime_1.jsxs)(StyledCurrentDetailed_1.Card, { children: [(0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Title, Object.assign({ icon: "Moisture" }, { children: "\u0412\u041B\u0410\u0416\u041D\u041E\u0421\u0422\u042C" })), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Text, { children: `${humidity} %` })] }), (0, jsx_runtime_1.jsxs)(StyledCurrentDetailed_1.Card, { children: [(0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Title, Object.assign({ icon: "Eye" }, { children: "\u0412\u0418\u0414\u0418\u041C\u041E\u0421\u0422\u042C" })), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Text, { children: `${visibility / 1000} км.` })] }), (0, jsx_runtime_1.jsxs)(StyledCurrentDetailed_1.Card, { children: [(0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Title, Object.assign({ icon: "Atmosphere" }, { children: "\u0414\u0410\u0412\u041B\u0415\u041D\u0418\u0415" })), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Text, { children: `${Math.round(pressure * 0.75006375541921)} мм рт.ст.` })] })] }));
}
exports.default = CardWeatherInfo;
