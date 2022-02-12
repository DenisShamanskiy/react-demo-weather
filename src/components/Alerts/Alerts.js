import React, { useState } from "react";
import "./Alerts.css";

export default function Alerts({ dataAlerts }) {
  const [open, setOpen] = useState(false);

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

  const alertFilter = dataAlerts.filter((alert) =>
    alertEvents.includes(alert.event)
  );

  return (
    <article className="alerts">
      <h2
        className={open ? "alerts-header is-expanded" : "alerts-header"}
        onClick={() => setOpen(!open)}
      >
        Росгидромет предупреждает:
      </h2>
      <ul
        className={open ? "alerts-content is-expanded" : "alerts-content"}
        onClick={() => setOpen(!open)}
      >
        {alertFilter.map(({ description }, index) => {
          return (
            <li key={index} className="alerts-description">
              {description[0].toUpperCase() + description.slice(1)}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
