"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const StyledCurrent_1 = require("../styles/StyledCurrent");
function CardWeather({ currentWeather }) {
    const { name, main: { temp, temp_max, temp_min }, weather, } = currentWeather;
    const [data] = weather;
    const { description } = data;
    return ((0, jsx_runtime_1.jsxs)(StyledCurrent_1.StyledCard, { children: [(0, jsx_runtime_1.jsx)(StyledCurrent_1.City, { children: name }), (0, jsx_runtime_1.jsxs)(StyledCurrent_1.Temperature, { children: [Math.round(temp), "\u00B0"] }), (0, jsx_runtime_1.jsx)(StyledCurrent_1.Description, { children: description[0].toUpperCase() + description.slice(1) }), (0, jsx_runtime_1.jsxs)(StyledCurrent_1.Description, { children: ["\u041C\u0430\u043A\u0441.: ", Math.round(temp_max), "\u00B0 \u041C\u0438\u043D.: ", Math.round(temp_min), "\u00B0"] })] }));
}
exports.default = CardWeather;
