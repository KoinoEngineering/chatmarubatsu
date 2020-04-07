import { ActionObject } from "interfaces/Action";
import { ActionType } from "./LoginActions";

export interface LoginState {
    name: string;
}

interface ChangeTextPayload extends Partial<LoginState> { }

export interface LoginChangeTextAction extends ActionObject<ActionType.CHANGE_TEXT, ChangeTextPayload> { }
export interface LoginLoginAction extends ActionObject<ActionType.LOGIN> { }

export type LoginActions =
    LoginChangeTextAction |
    LoginLoginAction;