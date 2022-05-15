"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const StyledAirPollution_1 = require("../styles/StyledAirPollution");
const StyledCurrentDetailed_1 = require("../styles/StyledCurrentDetailed");
function AirPollution({ airPollution }) {
    const { components, main: { aqi }, } = airPollution;
    const unit = ((0, jsx_runtime_1.jsxs)("span", { children: ["\u043C\u043A\u0433/\u043C", (0, jsx_runtime_1.jsx)("sup", { children: "3" })] }));
    const arrayChemicalFormula = [
        (0, jsx_runtime_1.jsx)(StyledAirPollution_1.ChemicalFormula, { children: "CO" }),
        (0, jsx_runtime_1.jsxs)(StyledAirPollution_1.ChemicalFormula, { children: ["NH", (0, jsx_runtime_1.jsx)("sub", { children: "3" })] }),
        (0, jsx_runtime_1.jsx)(StyledAirPollution_1.ChemicalFormula, { children: "NO" }),
        (0, jsx_runtime_1.jsxs)(StyledAirPollution_1.ChemicalFormula, { children: ["NO", (0, jsx_runtime_1.jsx)("sub", { children: "2" })] }),
        (0, jsx_runtime_1.jsxs)(StyledAirPollution_1.ChemicalFormula, { children: ["O", (0, jsx_runtime_1.jsx)("sub", { children: "3" })] }),
        (0, jsx_runtime_1.jsxs)(StyledAirPollution_1.ChemicalFormula, { children: ["PM", (0, jsx_runtime_1.jsx)("sub", { children: "2.5" })] }),
        (0, jsx_runtime_1.jsxs)(StyledAirPollution_1.ChemicalFormula, { children: ["M", (0, jsx_runtime_1.jsx)("sub", { children: "10" })] }),
        (0, jsx_runtime_1.jsxs)(StyledAirPollution_1.ChemicalFormula, { children: ["SO", (0, jsx_runtime_1.jsx)("sub", { children: "2" })] }),
    ];
    const arrayDesignation = [
        "Монооксид углерода",
        "Аммиак",
        "Монооксид азота",
        "Диоксид азота",
        "Озон",
        "Мелкодисперсные частицы",
        "Грубые твердые частицы",
        "Диоксид серы",
    ];
    function getDescriptionCAQI(index) {
        switch (index) {
            case 1:
                return "Очень низкое";
            case 2:
                return "Низкое";
            case 3:
                return "Среднее";
            case 4:
                return "Высокое";
            case 5:
                return "Очень высокое";
        }
    }
    return ((0, jsx_runtime_1.jsxs)(StyledAirPollution_1.Container, { children: [(0, jsx_runtime_1.jsx)(StyledAirPollution_1.TitleAirPollution, { children: "\u0417\u0410\u0413\u0420\u042F\u0417\u041D\u0415\u041D\u0418\u0415 \u0412\u041E\u0417\u0414\u0423\u0425\u0410" }), (0, jsx_runtime_1.jsxs)(StyledAirPollution_1.Wrapper, { children: [(0, jsx_runtime_1.jsx)(StyledAirPollution_1.Description, { children: getDescriptionCAQI(aqi) }), (0, jsx_runtime_1.jsx)(StyledCurrentDetailed_1.Input, { pollution: true, readOnly: true, type: "range", min: "1", max: "5", value: aqi })] }), (0, jsx_runtime_1.jsx)(StyledAirPollution_1.List, { children: Object.values(components).map((value, index) => {
                    return ((0, jsx_runtime_1.jsxs)(StyledAirPollution_1.Item, { children: [arrayChemicalFormula[index], (0, jsx_runtime_1.jsx)(StyledAirPollution_1.Designation, { children: arrayDesignation[index] }), (0, jsx_runtime_1.jsxs)(StyledAirPollution_1.Value, { children: [value, " ", unit] })] }, index));
                }) })] }));
}
exports.default = AirPollution;
