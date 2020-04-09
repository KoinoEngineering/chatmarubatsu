import { Payload } from "interfaces/Action";
import { Room } from "interfaces/firestore/rooms/Room";
import { Action } from "redux";
import { DialogProps } from "@material-ui/core";

export interface LobbyState {
    rooms?: Room[];
    addRoomModal: Omit<DialogProps, "id" | "children">;
    newRoomName?: string;
}

export enum ActionType {
    LOGOUT = "chatmarubatsu/Top/LOGOUT",
    ROOM_ADDED = "chatmarubatsu/Top/ROOM_ADDED",
    ROOM_MODIFIED = "chatmarubatsu/Top/ROOM_MODIFIED",
    ROOM_REMOVED = "chatmarubatsu/Top/ROOM_REMOVED",
    TOGGLE_ADD_ROOM_MODAL = "chatmarubatsu/Top/TOGGLE_ADD_ROOM_MODAL",
    CHANGE_NEWROOM_NAME = "chatmarubatsu/Top/CHANGE_NEWROOM_NAME",
    ADD_ROOM = "chatmarubatsu/Top/ADD_ROOM",
    REMOVE_ROOM = "chatmarubatsu/Top/REMOVE_ROOM",
}

export interface LobbySetUsersPayload extends LobbyState { }
export interface LobbyRemoveItemPayload {
    id: string;
}
export interface LobbyRoomAddedPayload {
    room: Room;
}

export interface LobbyRoomModifiedPayload {
    room: Room;
}

export interface LobbyRoomRemovedPayload {
    room: Room;
}
export interface LobbyChangeNewroomNamePayload extends Pick<LobbyState, "newRoomName"> { }

export interface LobbyLogoutAction extends Action<ActionType.LOGOUT> { }
export interface LobbyRoomAddedAction extends Action<ActionType.ROOM_ADDED>, Payload<LobbyRoomAddedPayload> { }
export interface LobbyRoomModifiedAction extends Action<ActionType.ROOM_MODIFIED>, Payload<LobbyRoomModifiedPayload> { }
export interface LobbyRoomRemovedAction extends Action<ActionType.ROOM_REMOVED>, Payload<LobbyRoomRemovedPayload> { }
export interface LobbyToggleAddRoomModalAction extends Action<ActionType.TOGGLE_ADD_ROOM_MODAL> { }
export interface LobbyChangeNewroomNameAction extends Action<ActionType.CHANGE_NEWROOM_NAME>, Payload<LobbyChangeNewroomNamePayload> { }

export type LobbyActions =
    LobbyLogoutAction |
    LobbyRoomAddedAction |
    LobbyRoomModifiedAction |
    LobbyRoomRemovedAction |
    LobbyToggleAddRoomModalAction |
    LobbyChangeNewroomNameAction;