import { ActionType, LobbyLogoutAction, LobbyRoomAddedAction, LobbyRoomAddedPayload, LobbyRoomModifiedPayload, LobbyRoomRemovedPayload, LobbyToggleAddRoomModalAction, LobbyChangeNewroomNamePayload, LobbyChangeNewroomNameAction } from "./LobbyTypes";

const topActionCreators = {
    logOut: (): LobbyLogoutAction => ({ type: ActionType.LOGOUT }),
    roomAdded: (payload: LobbyRoomAddedPayload): LobbyRoomAddedAction => ({ type: ActionType.ROOM_ADDED, payload }),
    roomModified: (payload: LobbyRoomModifiedPayload): LobbyRoomAddedAction => ({ type: ActionType.ROOM_ADDED, payload }),
    roomRemoved: (payload: LobbyRoomRemovedPayload): LobbyRoomAddedAction => ({ type: ActionType.ROOM_ADDED, payload }),
    toggleAddRoomModal: (): LobbyToggleAddRoomModalAction => ({ type: ActionType.TOGGLE_ADD_ROOM_MODAL }),
    changeNewroomName: (payload: LobbyChangeNewroomNamePayload): LobbyChangeNewroomNameAction => ({ type: ActionType.CHANGE_NEWROOM_NAME, payload })
};

export default topActionCreators;