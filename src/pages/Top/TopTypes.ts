import { ActionObject } from "interfaces/Action";
import { ActionType } from "./TopActions";
import { MyUser } from "interfaces/firestore/users/User";

export interface TopState {
    data?: MyUser[];
}

export interface TopSetUsersPayload extends Partial<TopState> { }
export interface TopRemoveItemPayload {
    id: string;
}


export interface TopLogoutAction extends ActionObject<ActionType.LOGOUT> { }
export interface TopGetUsersAction extends ActionObject<ActionType.GET_USERS> { }
export interface TopSetUsersAction extends ActionObject<ActionType.SET_USERS, TopSetUsersPayload> { }
export interface TopAddItemAction extends ActionObject<ActionType.ADD_ITEM> { }
export interface TopRemoveItemAction extends ActionObject<ActionType.REMOVE_ITEM, TopRemoveItemPayload> { }

export type TopActions =
    TopLogoutAction |
    TopGetUsersAction |
    TopSetUsersAction;