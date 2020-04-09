import { ActionType, LobbyLogoutAction, LobbyRoomAddedAction, LobbyRoomAddedPayload, LobbyRoomModifiedPayload, LobbyRoomRemovedPayload } from "./LobbyTypes";

const topActionCreators = {
    logOut: (): LobbyLogoutAction => ({ type: ActionType.LOGOUT }),
    roomAdded: (payload: LobbyRoomAddedPayload): LobbyRoomAddedAction => ({ type: ActionType.ROOM_ADDED, payload }),
    roomModified: (payload: LobbyRoomModifiedPayload): LobbyRoomAddedAction => ({ type: ActionType.ROOM_ADDED, payload }),
    roomRemoved: (payload: LobbyRoomRemovedPayload): LobbyRoomAddedAction => ({ type: ActionType.ROOM_ADDED, payload }),
};

export default topActionCreators;