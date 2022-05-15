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
const Wrapper = styled_components_1.default.div `
  width: 398px;
  display: grid;
  grid-template-columns: repeat(2, 195px);
  grid-template-rows: repeat(4, 195px);
  gap: 8px;
  grid-column: 1 / 3;
`;
const Item = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-main);
  background: rgba(255, 255, 255, 0.5);
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  backdrop-filter: var(--backdrop-filter);
  -webkit-backdrop-filter: var(--webkit-bf);
`;
const WrapperTitle = styled_components_1.default.div `
  width: 100%;
  height: 25px;
  margin-bottom: 0.9rem;
  display: flex;
  flex-direction: row;
`;
const Title = styled_components_1.default.div `
  width: 100%;
  border-radius: var(--radius-main);

  animation: ${shimmer} 3s infinite linear;
  background: linear-gradient(to right, #a3d1ff 4%, #8dc6ff 25%, #a3d1ff 36%);
  background-size: 1000px 100%;
`;
const Icon = styled_components_1.default.div `
  min-width: 25px;
  height: 25px;
  margin-right: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  animation: ${shimmer} 3s infinite linear;
  background: linear-gradient(to right, #a3d1ff 4%, #8dc6ff 25%, #a3d1ff 36%);
  background-size: 1000px 100%;
  border-radius: 50%;
`;
const Description = styled_components_1.default.div `
  width: 100%;
  height: 25px;
  margin: 0 auto auto 0;
  border-radius: var(--radius-main);

  animation: ${shimmer} 3s infinite linear;
  background: linear-gradient(to right, #a3d1ff 4%, #8dc6ff 25%, #a3d1ff 36%);
  background-size: 1000px 100%;
`;
const DescriptionRight = (0, styled_components_1.default)(Description) `
  width: 70%;
  margin: auto 0 0 auto;
`;
function StyledCurrentDetailed() {
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsxs)(Item, { children: [(0, jsx_runtime_1.jsxs)(WrapperTitle, { children: [(0, jsx_runtime_1.jsx)(Icon, {}), (0, jsx_runtime_1.jsx)(Title, {})] }), (0, jsx_runtime_1.jsx)(Description, {}), (0, jsx_runtime_1.jsx)(DescriptionRight, {})] }), (0, jsx_runtime_1.jsxs)(Item, { children: [(0, jsx_runtime_1.jsxs)(WrapperTitle, { children: [(0, jsx_runtime_1.jsx)(Icon, {}), (0, jsx_runtime_1.jsx)(Title, {})] }), (0, jsx_runtime_1.jsx)(Description, {}), (0, jsx_runtime_1.jsx)(DescriptionRight, {})] }), (0, jsx_runtime_1.jsxs)(Item, { children: [(0, jsx_runtime_1.jsxs)(WrapperTitle, { children: [(0, jsx_runtime_1.jsx)(Icon, {}), (0, jsx_runtime_1.jsx)(Title, {})] }), (0, jsx_runtime_1.jsx)(Description, {}), (0, jsx_runtime_1.jsx)(DescriptionRight, {})] }), (0, jsx_runtime_1.jsxs)(Item, { children: [(0, jsx_runtime_1.jsxs)(WrapperTitle, { children: [(0, jsx_runtime_1.jsx)(Icon, {}), (0, jsx_runtime_1.jsx)(Title, {})] }), (0, jsx_runtime_1.jsx)(Description, {}), (0, jsx_runtime_1.jsx)(DescriptionRight, {})] }), (0, jsx_runtime_1.jsxs)(Item, { children: [(0, jsx_runtime_1.jsxs)(WrapperTitle, { children: [(0, jsx_runtime_1.jsx)(Icon, {}), (0, jsx_runtime_1.jsx)(Title, {})] }), (0, jsx_runtime_1.jsx)(Description, {}), (0, jsx_runtime_1.jsx)(DescriptionRight, {})] }), (0, jsx_runtime_1.jsxs)(Item, { children: [(0, jsx_runtime_1.jsxs)(WrapperTitle, { children: [(0, jsx_runtime_1.jsx)(Icon, {}), (0, jsx_runtime_1.jsx)(Title, {})] }), (0, jsx_runtime_1.jsx)(Description, {}), (0, jsx_runtime_1.jsx)(DescriptionRight, {})] }), (0, jsx_runtime_1.jsxs)(Item, { children: [(0, jsx_runtime_1.jsxs)(WrapperTitle, { children: [(0, jsx_runtime_1.jsx)(Icon, {}), (0, jsx_runtime_1.jsx)(Title, {})] }), (0, jsx_runtime_1.jsx)(Description, {}), (0, jsx_runtime_1.jsx)(DescriptionRight, {})] }), (0, jsx_runtime_1.jsxs)(Item, { children: [(0, jsx_runtime_1.jsxs)(WrapperTitle, { children: [(0, jsx_runtime_1.jsx)(Icon, {}), (0, jsx_runtime_1.jsx)(Title, {})] }), (0, jsx_runtime_1.jsx)(Description, {}), (0, jsx_runtime_1.jsx)(DescriptionRight, {})] })] }));
}
exports.default = StyledCurrentDetailed;
