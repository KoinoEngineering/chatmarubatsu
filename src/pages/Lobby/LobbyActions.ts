import { ActionType, LobbyLogoutAction, LobbyRoomAddedAction, LobbyRoomAddedPayload, LobbyRoomModifiedPayload, LobbyRoomRemovedPayload, LobbyToggleAddRoomModalAction, LobbyChangeNewroomNamePayload, LobbyChangeNewroomNameAction, LobbyNewroomNameValidateAction, LobbyAddRoomAction, LobbyRemoveRoomAction, LobbyRoomRemovedAction, LobbyRoomModifiedAction } from "./LobbyTypes";

const topActionCreators = {
    logOut: (): LobbyLogoutAction => ({ type: ActionType.LOGOUT }),
    roomAdded: (payload: LobbyRoomAddedPayload): LobbyRoomAddedAction => ({ type: ActionType.ROOM_ADDED, payload }),
    roomModified: (payload: LobbyRoomModifiedPayload): LobbyRoomModifiedAction => ({ type: ActionType.ROOM_MODIFIED, payload }),
    roomRemoved: (payload: LobbyRoomRemovedPayload): LobbyRoomRemovedAction => ({ type: ActionType.ROOM_REMOVED, payload }),
    toggleAddRoomModal: (): LobbyToggleAddRoomModalAction => ({ type: ActionType.TOGGLE_ADD_ROOM_MODAL }),
    changeNewroomName: (payload: LobbyChangeNewroomNamePayload): LobbyChangeNewroomNameAction => ({ type: ActionType.CHANGE_NEWROOM_NAME, payload }),
    newroomNameValidate: (payload: LobbyNewroomNameValidateAction["payload"]): LobbyNewroomNameValidateAction => ({ type: ActionType.NEWROOM_NAME_VALIDATE, payload }),
    addRoom: (): LobbyAddRoomAction => ({ type: ActionType.ADD_ROOM }),
    removeRoom: (payload: LobbyRemoveRoomAction["payload"]): LobbyRemoveRoomAction => ({ type: ActionType.REMOVE_ROOM, payload }),
};

export default topActionCreators;