import { ActionObject } from "interfaces/Action";
import { ActionType } from "./TopActions";

export interface TopState {
}

export interface ChangeTextPayload extends Partial<TopState> {
}

export type TopActions =
    ActionObject<ActionType.LOGOUT>;