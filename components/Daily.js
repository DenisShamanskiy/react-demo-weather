"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const StyledDaily_1 = require("../styles/StyledDaily");
const formate_1 = __importDefault(require("../utils/formate"));
function CardDaily({ dataWeather }) {
    // console.log(dataWeather);
    return ((0, jsx_runtime_1.jsxs)(StyledDaily_1.Container, { children: [(0, jsx_runtime_1.jsx)(StyledDaily_1.TitleDaily, { children: "\u041F\u0420\u041E\u0413\u041D\u041E\u0417 \u041D\u0410 7 \u0414\u041D\u0415\u0419" }), (0, jsx_runtime_1.jsx)(StyledDaily_1.List, { children: dataWeather.map(({ temp: { max, min }, weather, dt, pop }, index) => {
                    return ((0, jsx_runtime_1.jsxs)(StyledDaily_1.Item, { children: [(0, jsx_runtime_1.jsx)(StyledDaily_1.Day, { children: index === 0
                                    ? "Сегодня"
                                    : index === 1
                                        ? "Завтра"
                                        : formate_1.default.dayWeek(dt) }), (0, jsx_runtime_1.jsx)(StyledDaily_1.Icon, { src: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`, alt: "\u0418\u043A\u043E\u043D\u043A\u0430 \u043F\u043E\u0433\u043E\u0434\u044B" }), (0, jsx_runtime_1.jsxs)(StyledDaily_1.Wrapper, { children: [(0, jsx_runtime_1.jsx)(StyledDaily_1.Description, { children: weather[0].description[0].toUpperCase() +
                                            weather[0].description.slice(1) }), pop !== 0 ? ((0, jsx_runtime_1.jsx)(StyledDaily_1.Precipitation, { children: `Вероятность осадков ${formate_1.default.precipitation(pop)}` })) : ("")] }), (0, jsx_runtime_1.jsxs)(StyledDaily_1.Temperature, { children: [Math.round(min), "\u00B0"] }), (0, jsx_runtime_1.jsxs)(StyledDaily_1.Temperature, { children: [Math.round(max), "\u00B0"] })] }, index));
                }) })] }));
}
exports.default = CardDaily;
