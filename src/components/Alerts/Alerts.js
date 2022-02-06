import { useState } from "react";
import al from "../../images/svg/exclamation-octagon.svg";
import exclamation from "../../images/svg/info_square.svg";
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
  const [open, setOpen] = useState(false);

  const alertFilter = dataAlerts.filter(function callbackFn(element) {
    return alertEvents.includes(element.event);
  });

  // console.log(alertFilter);

  return (
    <section className="alerts">
      <div className="alerts-header">
        <img className="alerts-icon" src={al} alt="Иконка погоды" />
        <p className="alerts-title">Росгидромет предупреждает:</p>
        <button
          className={!open ? "alerts-open" : "alerts-closed"}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        ></button>
      </div>

      {open ? (
        <ul className="alert-list">
          {alertFilter.map(({ event, description }, index) => {
            return (
              <li key={index} className="alert-item">
                {/* <p className="alert-title">{event}</p> */}
                <div className="alerts-description">
                  <img
                    className="alerts-description-icon"
                    src={exclamation}
                    alt="Иконка погоды"
                  />
                  <p className="alerts-text" id="example-collapse-text">
                    {description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </section>
  );
}
