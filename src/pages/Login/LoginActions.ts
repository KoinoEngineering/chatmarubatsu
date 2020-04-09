import { LoginChangeTextAction, LoginLoginAction } from "./LoginTypes";

export enum ActionType {
    CHANGE_TEXT = "chatmarubatsu/Login/CHANGE_TEXT",
    LOGIN = "chatmarubatsu/Login/LOGIN"
}

const loginActionCreators = {
    changeText: (payload: LoginChangeTextAction["payload"]): LoginChangeTextAction => ({ type: ActionType.CHANGE_TEXT, payload }),
    logIn: (): LoginLoginAction => ({ type: ActionType.LOGIN }),
};

export default loginActionCreators;