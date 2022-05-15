"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const shimmer = (0, styled_components_1.keyframes) `
   0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;
const LoaderContainer = styled_components_1.default.div `
  width: 398px;
  height: 227.81px;
  margin: 2rem 0 0 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-main);
  grid-column: 1 / 3;
`;
const Loader_1 = styled_components_1.default.div `
  width: 60%;
  height: 29px;
  margin: 0.7rem 0;
  border-radius: 20px;
  animation: ${shimmer} 3s infinite linear;
  background: linear-gradient(to right, #7eb2e5 4%, #badcff 25%, #7eb2e5 36%);
  background-size: 1000px 100%;
`;
const Loader_2 = (0, styled_components_1.default)(Loader_1) `
  width: 25%;
  height: 4rem;
`;
const Loader_3 = (0, styled_components_1.default)(Loader_1) `
  height: 1.5rem;
`;
function LoaderCurrent() {
    return ((0, jsx_runtime_1.jsxs)(LoaderContainer, { children: [(0, jsx_runtime_1.jsx)(Loader_1, {}), (0, jsx_runtime_1.jsx)(Loader_2, {}), (0, jsx_runtime_1.jsx)(Loader_3, {}), (0, jsx_runtime_1.jsx)(Loader_3, {})] }));
}
exports.default = LoaderCurrent;
