import { RootState } from "redux/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const usePopupSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAirSelector: TypedUseSelectorHook<RootState> = useSelector
export const useCoordinatesSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector