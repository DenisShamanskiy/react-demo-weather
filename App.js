"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Current_1 = __importDefault(require("./components/Current"));
const Search_1 = __importDefault(require("./components/Search"));
const Alerts_1 = __importDefault(require("./components/Alerts"));
const Hourly_1 = __importDefault(require("./components/Hourly"));
const Daily_1 = __importDefault(require("./components/Daily"));
const AirPollution_1 = __importDefault(require("./components/AirPollution"));
const CurrentDetailed_1 = __importDefault(require("./components/CurrentDetailed"));
const Footer_1 = __importDefault(require("./components/Footer"));
// utils
const getCurrentCoordinates_1 = __importDefault(require("./utils/getCurrentCoordinates"));
const API_1 = require("./utils/API");
// Styles
const Global_1 = __importDefault(require("./styles/Global"));
const StyledApp_1 = __importDefault(require("./styles/StyledApp"));
// Loader
const LoaderCurrent_1 = __importDefault(require("./styles/Loader/LoaderCurrent"));
const LoaderHourly_1 = __importDefault(require("./styles/Loader/LoaderHourly"));
const LoaderDaily_1 = __importDefault(require("./styles/Loader/LoaderDaily"));
const LoaderAirPollution_1 = __importDefault(require("./styles/Loader/LoaderAirPollution"));
const LoaderCurrentDetailed_1 = __importDefault(require("./styles/Loader/LoaderCurrentDetailed"));
function App() {
    const [currentWeather, setCurrentWeather] = (0, react_1.useState)();
    const [alertsWeather, setAlertsWeather] = (0, react_1.useState)();
    const [hourlyWeather, setHourlyWeather] = (0, react_1.useState)();
    const [dailyWeather, setDailyWeather] = (0, react_1.useState)();
    const [airPollution, setAirPollution] = (0, react_1.useState)();
    const [timeZone, setTimeZone] = (0, react_1.useState)();
    // Основной запрос
    function getWeatherCurrentCoordinates() {
        return __awaiter(this, void 0, void 0, function* () {
            const [lat, lon] = yield (0, getCurrentCoordinates_1.default)();
            const dataCurrentWeather = yield (0, API_1.сurrentWeatherAPI)(lat, lon);
            const dataOneCall = yield (0, API_1.oneCallAPI)(lat, lon);
            const dataAirPollution = yield (0, API_1.airPollutionAPI)(lat, lon);
            dataCurrentWeather.uvi = dataOneCall.current.uvi;
            setCurrentWeather(dataCurrentWeather);
            setAlertsWeather(dataOneCall.alerts);
            setHourlyWeather(dataOneCall.hourly.slice(0, 25));
            setDailyWeather(dataOneCall.daily);
            setAirPollution(dataAirPollution);
            setTimeZone(dataOneCall.timezone_offset);
        });
    }
    // Поиск погоды по городу
    function getCityWeather(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const coordinates = yield (0, API_1.geocodingAPI)(city);
            const dataCurrentWeather = yield (0, API_1.сurrentWeatherAPI)(coordinates[0], coordinates[1]);
            const dataOneCall = yield (0, API_1.oneCallAPI)(coordinates[0], coordinates[1]);
            const dataAirPollution = yield (0, API_1.airPollutionAPI)(coordinates[0], coordinates[1]);
            dataCurrentWeather.uvi = dataOneCall.current.uvi;
            setCurrentWeather(dataCurrentWeather);
            setAlertsWeather(dataOneCall.alerts);
            setHourlyWeather(dataOneCall.hourly.slice(0, 25));
            setDailyWeather(dataOneCall.daily);
            setAirPollution(dataAirPollution);
            setTimeZone(dataOneCall.timezone_offset);
        });
    }
    (0, react_1.useEffect)(() => {
        getWeatherCurrentCoordinates();
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Global_1.default, {}), (0, jsx_runtime_1.jsxs)(StyledApp_1.default, { children: [currentWeather ? ((0, jsx_runtime_1.jsx)(Current_1.default, { currentWeather: currentWeather })) : ((0, jsx_runtime_1.jsx)(LoaderCurrent_1.default, {})), (0, jsx_runtime_1.jsx)(Search_1.default, { search: getCityWeather }), alertsWeather ? ((0, jsx_runtime_1.jsx)(Alerts_1.default, { dataAlerts: alertsWeather, timeZone: timeZone })) : (""), hourlyWeather ? ((0, jsx_runtime_1.jsx)(Hourly_1.default, { hourlyWeather: hourlyWeather, timeZone: timeZone })) : ((0, jsx_runtime_1.jsx)(LoaderHourly_1.default, {})), dailyWeather ? (0, jsx_runtime_1.jsx)(Daily_1.default, { dataWeather: dailyWeather }) : (0, jsx_runtime_1.jsx)(LoaderDaily_1.default, {}), airPollution ? ((0, jsx_runtime_1.jsx)(AirPollution_1.default, { airPollution: airPollution })) : ((0, jsx_runtime_1.jsx)(LoaderAirPollution_1.default, {})), currentWeather ? ((0, jsx_runtime_1.jsx)(CurrentDetailed_1.default, { dataWeather: currentWeather })) : ((0, jsx_runtime_1.jsx)(LoaderCurrentDetailed_1.default, {})), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] })] }));
}
exports.default = App;
