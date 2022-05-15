"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const StyledHourly_1 = require("../styles/StyledHourly");
const ScrollHorizontal_1 = __importDefault(require("./ScrollHorizontal"));
const formate_1 = __importDefault(require("../utils/formate"));
function CardHourly({ hourlyWeather, timeZone }) {
    // console.log(hourlyWeather);
    return ((0, jsx_runtime_1.jsxs)(StyledHourly_1.Container, { children: [(0, jsx_runtime_1.jsx)(StyledHourly_1.TitleHourly, { children: "\u041F\u041E\u0427\u0410\u0421\u041E\u0412\u041E\u0419 \u041F\u0420\u041E\u0413\u041D\u041E\u0417" }), (0, jsx_runtime_1.jsx)(ScrollHorizontal_1.default, Object.assign({ List: StyledHourly_1.List }, { children: hourlyWeather.map(({ temp, weather, dt }, index) => {
                    return ((0, jsx_runtime_1.jsxs)(StyledHourly_1.Item, { children: [(0, jsx_runtime_1.jsx)(StyledHourly_1.Time, { children: index === 0 ? "Сейчас" : formate_1.default.time(dt, timeZone) }), (0, jsx_runtime_1.jsx)(StyledHourly_1.Icon, { src: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`, alt: "\u0418\u043A\u043E\u043D\u043A\u0430 \u043F\u043E\u0433\u043E\u0434\u044B" }), (0, jsx_runtime_1.jsx)(StyledHourly_1.Temperature, { children: `${Math.round(temp)}°` })] }, index));
                }) }))] }));
}
exports.default = CardHourly;
