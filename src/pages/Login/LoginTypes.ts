import { ActionObject } from "interfaces/Action";
import { ActionType } from "./LoginActions";

export interface LoginState {
    name: string;
}

export interface ChangeTextPayload extends Partial<LoginState> {
}

export type LoginActions =
    ActionObject<ActionType.CHANGE_TEXT, ChangeTextPayload> |
    ActionObject<ActionType.LOGIN>;