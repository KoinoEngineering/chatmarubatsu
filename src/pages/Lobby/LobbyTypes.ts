import { Payload } from "interfaces/Action";
import { Room } from "interfaces/firestore/rooms/Room";
import { Action } from "redux";
import { ActionType } from "./LobbyActions";

export interface LobbyState {
    rooms?: Room[];
}

export interface LobbySetUsersPayload extends Partial<LobbyState> { }
export interface LobbyRemoveItemPayload {
    id: string;
}
export interface LobbyRoomAddedPayload {
    room: Room;
}


export interface LobbyLogoutAction extends Action<ActionType.LOGOUT> { }
export interface LobbyRoomAddedAction extends Action<ActionType.ROOM_ADDED>, Payload<LobbyRoomAddedPayload> { }

export type LobbyActions =
    LobbyLogoutAction |
    LobbyRoomAddedAction;