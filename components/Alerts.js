"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const StyledAlerts_1 = require("../styles/StyledAlerts");
function Alerts({ dataAlerts, timeZone }) {
    // console.log(dataAlerts);
    const [open, setOpen] = (0, react_1.useState)(false);
    // const [alertsFilter, setAlertsFilter] = useState();
    const alertEvents = [
        "Ветер",
        "Наводнение",
        "Лавины",
        "Прочие опасности",
        "Дождь",
        "Снег",
        "Гололедно - изморозевое отложение",
        "Туман",
        "Пыльная (песчаная) буря",
        "Пожарная опасность",
    ];
    function confirmCountryAlerts(array) {
        if (array.some((element) => element.sender_name === "")) {
            return array.filter((alert) => alertEvents.includes(alert.event));
        }
        else {
            return array;
        }
    }
    return ((0, jsx_runtime_1.jsxs)(StyledAlerts_1.StyledAlerts, Object.assign({ onClick: () => setOpen(!open) }, { children: [(0, jsx_runtime_1.jsx)(StyledAlerts_1.Header, Object.assign({ open: open }, { children: confirmCountryAlerts(dataAlerts)[0].sender_name
                    ? confirmCountryAlerts(dataAlerts)[0].sender_name
                    : "Росгидромет предупреждает:" })), (0, jsx_runtime_1.jsx)(StyledAlerts_1.Content, Object.assign({ open: open }, { children: confirmCountryAlerts(dataAlerts).map(({ description, start, end, event }, index) => {
                    return ((0, jsx_runtime_1.jsx)(StyledAlerts_1.Item, { children: (0, jsx_runtime_1.jsxs)(StyledAlerts_1.Description, { children: [(0, jsx_runtime_1.jsxs)(StyledAlerts_1.Event, { children: [event, "."] }), (0, jsx_runtime_1.jsx)(StyledAlerts_1.Text, { children: description[0].toUpperCase() + description.slice(1) })] }) }, index));
                }) }))] })));
}
exports.default = Alerts;
