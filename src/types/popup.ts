export interface PopupState {
    popup: boolean
}

export enum PopupActionTypes {
  VISIBILITY = "VISIBILITY",
  HIDDEN = "HIDDEN",
}

interface PopupActionVisibility {
    type: PopupActionTypes.VISIBILITY;
}

interface PopupActionHidden {
    type: PopupActionTypes.HIDDEN;
}

export type PopupAction = PopupActionVisibility | PopupActionHidden