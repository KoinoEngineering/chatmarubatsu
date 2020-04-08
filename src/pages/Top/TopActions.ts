import { TopGetUsersAction, TopLogoutAction, TopSetUsersAction, TopState, TopAddItemAction, TopRemoveItemAction, TopRemoveItemPayload } from "./TopTypes";

export enum ActionType {
    LOGOUT = "chatmarubatsu/Top/LOGOUT",
    GET_USERS = "chatmarubatsu/Top/GET_USERS",
    SET_USERS = "chatmarubatsu/Top/SET_USERS",
    ADD_ITEM = "chatmarubatsu/Top/ADD_ITEM",
    REMOVE_ITEM = "chatmarubatsu/Top/REMOVE_ITEM",
}

const topActionCreators = {
    logOut: (): TopLogoutAction => ({ type: ActionType.LOGOUT }),
    getUsers: (): TopGetUsersAction => ({ type: ActionType.GET_USERS }),
    setUsers: (data: TopState["data"]): TopSetUsersAction => ({ type: ActionType.SET_USERS, payload: { data } }),
    addItem: (): TopAddItemAction => ({ type: ActionType.ADD_ITEM }),
    removeItem: (id: TopRemoveItemPayload["id"]): TopRemoveItemAction => ({ type: ActionType.REMOVE_ITEM, payload: { id } })
};

export default topActionCreators;