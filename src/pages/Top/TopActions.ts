import { createAction } from "core/Action";

export enum ActionType {
    LOGOUT = "chatmarubatsu/Top/LOGOUT"
}

const topActionCreators = {
    logOut: () => createAction(ActionType.LOGOUT, undefined)
};

export default topActionCreators;