import React from "react";
import { useState } from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { OneCallState } from "redux/types";
import {
  StyledAlerts,
  Header,
  Content,
  Item,
  Description,
  Event,
  Text,
} from "../styles/StyledAlerts";

const Alerts: React.FC = (): React.ReactElement => {
  const [open, setOpen] = useState(false);
  console.log(open);
  

  const data: OneCallState = useAppSelector(state => state.oneCallReducer)

  const dataAlerts = data.OneCall.alerts
  
  const getData = (dataAlerts: any) =>
    dataAlerts[0].sender_name
    ?
    dataAlerts
    :
    dataAlerts.filter((alerts: any) => /[а-я]/i.test(alerts.event))

  return (
    <StyledAlerts onClick={() => setOpen(!open)}>
      <Header open={open}>
        {dataAlerts[0].sender_name ? dataAlerts[0].sender_name : "Росгидромет предупреждает:"}
      </Header>

      <Content open={open}>
        {getData(dataAlerts).map(
          ({ description, event }: any, index: React.Key | null | undefined) => {
            return (
              <Item key={index}>
                <Description>
                  <Event>{event}.</Event>
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

export default Alerts