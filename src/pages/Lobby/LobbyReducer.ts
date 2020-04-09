import { Room } from "interfaces/firestore/rooms/Room";
import { Reducer } from "redux";
import { ActionType, LobbyActions, LobbyState } from "./LobbyTypes";

const initialState = (): LobbyState => ({
});

const lobby: Reducer<LobbyState, LobbyActions> = (state = initialState(), action) => {

    switch (action.type) {
        case ActionType.ROOM_ADDED:
        case ActionType.ROOM_MODIFIED: {
            const editRoom = (prev: Room[] | undefined, changed: Room): Room[] | undefined => {
                if (prev) {
                    return (prev.find((room) => room.id === changed.id)
                        ? prev.map((room) => room.id === changed.id
                            ? {
                                ...room,
                                ...changed
                            }
                            : room)
                        : prev.concat(changed)).sort((r1, r2) => r1.id === r2.id ? 0 : r1.id > r2.id ? 1 : -1);
                } else {
                    return [changed];
                }
            };

            return {
                ...state,
                rooms: editRoom(state.rooms, action.payload.room)
            };
        }
        case ActionType.ROOM_REMOVED: {
            return {
                ...state,
                rooms: state.rooms?.filter(room => room.id !== action.payload.room.id)
            };
        }
        default:
            return state;
    }
};

export default lobby;
