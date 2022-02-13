import { useState } from "react";
import "./Alerts.css";
import formate from "../../utils/formate";

export default function Alerts({ dataAlerts, timeZone }) {
  // console.log(dataAlerts);
  const [open, setOpen] = useState(false);
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
  ];

  function confirmCountryAlerts(array) {
    if (array.some((element) => element.sender_name === "")) {
      return array.filter((alert) => alertEvents.includes(alert.event));
    } else {
      return array;
    }
  }

  return (
    <article className="alerts" onClick={() => setOpen(!open)}>
      <h2 className={open ? "alerts-header is-expanded" : "alerts-header"}>
        {confirmCountryAlerts(dataAlerts)[0].sender_name
          ? confirmCountryAlerts(dataAlerts)[0].sender_name
          : "Росгидромет предупреждает:"}
      </h2>
      <ul className={open ? "alerts-content is-expanded" : "alerts-content"}>
        {confirmCountryAlerts(dataAlerts).map(
          ({ description, start, end, event }, index) => {
            return (
              <li key={index} className="alerts-item">
                <div className="alerts-description">
                  <p className="alerts-event">{event}.</p>
                  {!confirmCountryAlerts(dataAlerts)[0].sender_name ? (
                    <p className="alerts-time">{`Период предупреждения c ${formate.day(
                      start,
                      timeZone
                    )} ${formate.time(start, timeZone)} до ${formate.day(
                      end,
                      timeZone
                    )} ${formate.time(end, timeZone)}`}</p>
                  ) : (
                    ""
                  )}
                  <p className="alerts-text">
                    {description[0].toUpperCase() + description.slice(1)}
                  </p>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </article>
  );
}
