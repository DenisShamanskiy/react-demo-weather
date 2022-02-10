import { useState } from "react";
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
  ];

  const alertFilter = dataAlerts.filter(function callbackFn(element) {
    return alertEvents.includes(element.event);
  });

  // console.log(alertFilter);

  return (
    <article className="container">
      <details className="default">
        <summary className="alerts-header">Росгидромет предупреждает:</summary>
        <ul className="alert-list">
          {alertFilter.map(({ event, description }, index) => {
            return (
              <li key={index} className="alert-item">
                {/* <p className="alert-title">{event}</p> */}
                <div className="alerts-description">
                  <p className="alerts-text" id="example-collapse-text">
                    {description[0].toUpperCase() + description.slice(1)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </details>
    </article>
  );
}
