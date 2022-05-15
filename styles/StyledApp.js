"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledApp = styled_components_1.default.div `
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(2, 195px);
  gap: 8px;
  justify-items: center;
`;
exports.default = StyledApp;
