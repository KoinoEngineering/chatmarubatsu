import { ActionObject } from "interfaces/Action";
import { ActionType } from "./LobbyActions";
import { MyUser } from "interfaces/firestore/users/User";

export interface LobbyState {
    data?: MyUser[];
}

export interface LobbySetUsersPayload extends Partial<LobbyState> { }
export interface LobbyRemoveItemPayload {
    id: string;
}


export interface LobbyLogoutAction extends ActionObject<ActionType.LOGOUT> { }
export interface LobbyGetUsersAction extends ActionObject<ActionType.GET_USERS> { }
export interface LobbySetUsersAction extends ActionObject<ActionType.SET_USERS, LobbySetUsersPayload> { }
export interface LobbyAddItemAction extends ActionObject<ActionType.ADD_ITEM> { }
export interface LobbyRemoveItemAction extends ActionObject<ActionType.REMOVE_ITEM, LobbyRemoveItemPayload> { }

export type LobbyActions =
    LobbyLogoutAction |
    LobbyGetUsersAction |
    LobbySetUsersAction;