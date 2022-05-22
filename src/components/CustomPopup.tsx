import { useEffect, useState } from "react";
import {
    Overlay,
    Popup,
    Close,
    Warning,
    Text
  } from "styles/StyledCustomPopup";

interface IPopupProps {
    onClose: Function,
    visibility: boolean,
    text?: string
    children?: any
  }

const CustomPopup: React.FC<IPopupProps> = ({visibility, onClose, text}) => {

  console.log(text);
  
  const [show, setShow] = useState(visibility);

  const closeHandler = () => {
    setShow(!show);
    onClose(false);
  };

  useEffect(() => {
    setShow(show);
  }, [show]);

  return (
    <Overlay show={show}> 
        <Popup show={show}>
            <Warning>Сервер не отвечает</Warning>
            <Text>Возможно необходимо использовать VPN</Text>
            <Close onClick={closeHandler}>Хорошо</Close>
      </Popup>
    </Overlay>
  );
};


export default CustomPopup;