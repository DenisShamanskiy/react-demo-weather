"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const StyledSearch_1 = require("../styles/StyledSearch");
function Search({ search }) {
    const [city, setCity] = (0, react_1.useState)("");
    function handleChange(event) {
        setCity(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search(city.trim());
        setCity("");
    }
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(StyledSearch_1.StyledSearch, Object.assign({ role: "search" }, { children: [(0, jsx_runtime_1.jsx)(StyledSearch_1.Input, { type: "search", value: city, placeholder: "\u0412 \u043A\u0430\u043A\u043E\u043C \u0433\u043E\u0440\u043E\u0434\u0435?", autocomplete: "on", onChange: handleChange, required: true }), (0, jsx_runtime_1.jsx)(StyledSearch_1.Button, { type: "submit", onClick: handleSubmit })] })) }));
}
exports.default = Search;
