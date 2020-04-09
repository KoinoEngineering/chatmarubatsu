import { LobbyLogoutAction, LobbyRoomAddedAction, LobbyRoomAddedPayload } from "./LobbyTypes";

export enum ActionType {
    LOGOUT = "chatmarubatsu/Top/LOGOUT",
    ROOM_ADDED = "chatmarubatsu/Top/ROOM_ADDED",
}

const topActionCreators = {
    logOut: (): LobbyLogoutAction => ({ type: ActionType.LOGOUT }),
    roomAdded: (payload: LobbyRoomAddedPayload): LobbyRoomAddedAction => ({ type: ActionType.ROOM_ADDED, payload }),
};

export default topActionCreators;