import { Payload } from "interfaces/Action";
import { Action } from "redux";
import { ActionType } from "./LoginActions";

export interface LoginState {
    name: string;
}

interface ChangeTextPayload extends Partial<LoginState> { }

export interface LoginChangeTextAction extends Action<ActionType.CHANGE_TEXT>, Payload<ChangeTextPayload> { }
export interface LoginLoginAction extends Action<ActionType.LOGIN> { }

export type LoginActions =
    LoginChangeTextAction |
    LoginLoginAction;