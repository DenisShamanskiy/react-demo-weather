import React from "react";
import { useState } from "react";
import {
  StyledAlerts,
  Header,
  Content,
  Item,
  Description,
  Event,
  Text,
} from "../styles/StyledAlerts";
// import formate from "../utils/formate";

type AlertsProps = {
  dataAlerts: any[],
  // timeZone: number
}

export const Alerts: React.FC<AlertsProps> = ({ dataAlerts, /*timeZone*/ }) => {
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
    "Пожарная опасность",
  ];

  function confirmCountryAlerts(array: any) {
    if (array.some((element: any) => element.sender_name === "")) {
      return array.filter((alert: any) => alertEvents.includes(alert.event));
    } else {
      return array;
    }
  }

  return (
    <StyledAlerts onClick={() => setOpen(!open)}>
      <Header open={open}>
        {confirmCountryAlerts(dataAlerts)[0].sender_name
          ? confirmCountryAlerts(dataAlerts)[0].sender_name
          : "Росгидромет предупреждает:"}
      </Header>

      <Content open={open}>
        {confirmCountryAlerts(dataAlerts).map(
          ({ description, /*start, end,*/ event }: any, index: React.Key | null | undefined) => {
            return (
              <Item key={index}>
                <Description>
                  <Event>{event}.</Event>
                  {/* {!confirmCountryAlerts(dataAlerts)[0].sender_name ? (
                    <Event>{`${formate.day(start, timeZone)} ${formate.time(
                      start,
                      timeZone
                    )} - ${formate.day(end, timeZone)} ${formate.time(
                      end,
                      timeZone
                    )}`}</Event>
                  ) : (
                    ""
                  )} */}
                  <Text>
                    {description[0].toUpperCase() + description.slice(1)}
                  </Text>
                </Description>
              </Item>
            );
          }
        )}
      </Content>
    </StyledAlerts>
  );
}
