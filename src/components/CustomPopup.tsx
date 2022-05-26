import { useDispatch } from "react-redux";
import {
    Overlay,
    Popup,
    Close,
    Warning,
    Text
  } from "styles/StyledCustomPopup";
import { PopupActionTypes } from "types/popup";
import { usePopupSelector } from "../hooks/useTypedSelector";

const CustomPopup: React.FC = (): React.ReactElement => {  

const dispatch = useDispatch()

const popup = usePopupSelector(state => state.popup)

  return (
    <Overlay show={popup.popup}> 
        <Popup show={popup.popup}>
            <Warning>Сервер не отвечает</Warning>
            <Text>Возможно необходимо использовать VPN</Text>
            <Close onClick={() => dispatch({type: PopupActionTypes.HIDDEN})}>Хорошо</Close>
      </Popup>
    </Overlay>
  );
};

export default CustomPopup;