import { Reducer } from "redux";
import { LobbyActions, LobbyState } from "./LobbyTypes";
import { ActionType } from "./LobbyActions";
import { Room } from "interfaces/firestore/rooms/Room";

const initialState = (): LobbyState => ({
});

const lobby: Reducer<LobbyState, LobbyActions> = (state = initialState(), action) => {
    switch (action.type) {
        case ActionType.ROOM_ADDED: {
            const editRoom = (prev: Room[] | undefined, added: Room): Room[] | undefined => {
                if (prev) {
                    return (prev.find((room) => room.id === added.id)
                        ? prev.map((room) => room.id === added.id
                            ? {
                                ...room,
                                ...added
                            }
                            : room)
                        : prev.concat(added)).sort((r1, r2) => r1.id === r2.id ? 0 : r1.id > r2.id ? 1 : -1);
                } else {
                    return [added];
                }
            };
            return {
                ...state,
                rooms: editRoom(state.rooms, action.payload.room)
            };
        }
        default:
            return state;
    }
};

export default lobby;
