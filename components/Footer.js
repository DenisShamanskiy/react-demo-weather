"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// import React from "react";
const styled_components_1 = __importDefault(require("styled-components"));
const StyledFooter = styled_components_1.default.footer `
  width: 425px;
  padding: 0.9rem;
  text-align: center;
`;
function Footer() {
    return (0, jsx_runtime_1.jsx)(StyledFooter, { children: "\u00A9 2022 \u0414\u0435\u043D\u0438\u0441 \u0428\u0430\u043C\u0430\u043D\u0441\u043A\u0438\u0439" });
}
exports.default = Footer;
