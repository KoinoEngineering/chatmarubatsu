import { createAction } from "core/Action";
import { ChangeTextPayload } from "./LoginTypes";

export enum ActionType {
    CHANGE_TEXT = "chatmarubatsu/Login/CHANGE_TEXT",
    LOGIN = "chatmarubatsu/Login/LOGIN"
}

const loginActionCreators = {
    changeText: (payload: ChangeTextPayload) => createAction(ActionType.CHANGE_TEXT, payload),
    logIn: () => createAction(ActionType.LOGIN, undefined)
};

export default loginActionCreators;