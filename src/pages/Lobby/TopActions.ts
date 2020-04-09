import { LobbyGetUsersAction, LobbyLogoutAction, LobbySetUsersAction, LobbyState, LobbyAddItemAction, LobbyRemoveItemAction, LobbyRemoveItemPayload } from "./TopTypes";

export enum ActionType {
    LOGOUT = "chatmarubatsu/Top/LOGOUT",
    GET_USERS = "chatmarubatsu/Top/GET_USERS",
    SET_USERS = "chatmarubatsu/Top/SET_USERS",
    ADD_ITEM = "chatmarubatsu/Top/ADD_ITEM",
    REMOVE_ITEM = "chatmarubatsu/Top/REMOVE_ITEM",
}

const topActionCreators = {
    logOut: (): LobbyLogoutAction => ({ type: ActionType.LOGOUT }),
    getUsers: (): LobbyGetUsersAction => ({ type: ActionType.GET_USERS }),
    setUsers: (data: LobbyState["data"]): LobbySetUsersAction => ({ type: ActionType.SET_USERS, payload: { data } }),
    addItem: (): LobbyAddItemAction => ({ type: ActionType.ADD_ITEM }),
    removeItem: (id: LobbyRemoveItemPayload["id"]): LobbyRemoveItemAction => ({ type: ActionType.REMOVE_ITEM, payload: { id } })
};

export default topActionCreators;