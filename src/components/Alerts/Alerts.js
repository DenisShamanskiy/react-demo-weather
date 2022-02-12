import React from "react";
import "./Alerts.css";

export default function Alerts({ dataAlerts }) {
  // console.log(dataAlerts);
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
      <details>
        <summary className="alerts-header">Росгидромет предупреждает:</summary>
        <ul className="alert-list">
          {alertFilter.map(({ description }, index) => {
            return (
              <li key={index} className="alerts-description">
                {description[0].toUpperCase() + description.slice(1)}
              </li>
            );
          })}
        </ul>
      </details>
    </article>
  );
}
