import { Payload } from "interfaces/Action";
import { Room } from "interfaces/firestore/rooms/Room";
import { Action } from "redux";

export interface LobbyState {
    rooms?: Room[];
}

export enum ActionType {
    LOGOUT = "chatmarubatsu/Top/LOGOUT",
    ROOM_ADDED = "chatmarubatsu/Top/ROOM_ADDED",
    ROOM_MODIFIED = "chatmarubatsu/Top/ROOM_MODIFIED",
    ROOM_REMOVED = "chatmarubatsu/Top/ROOM_REMOVED",
}

export interface LobbySetUsersPayload extends Partial<LobbyState> { }
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

export interface LobbyLogoutAction extends Action<ActionType.LOGOUT> { }
export interface LobbyRoomAddedAction extends Action<ActionType.ROOM_ADDED>, Payload<LobbyRoomAddedPayload> { }
export interface LobbyRoomModifiedAction extends Action<ActionType.ROOM_MODIFIED>, Payload<LobbyRoomModifiedPayload> { }
export interface LobbyRoomRemovedAction extends Action<ActionType.ROOM_REMOVED>, Payload<LobbyRoomRemovedPayload> { }

export type LobbyActions =
    LobbyLogoutAction |
    LobbyRoomAddedAction |
    LobbyRoomModifiedAction |
    LobbyRoomRemovedAction;