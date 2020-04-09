import { Reducer } from "redux";
import { LobbyActions, LobbyState } from "./LobbyTypes";
import { ActionType } from "./LobbyActions";

const initialState = (): LobbyState => ({
});

const lobby: Reducer<LobbyState, LobbyActions> = (state = initialState(), action) => {
    switch (action.type) {
        case ActionType.SET_USERS:
            return {
                ...state,
                data: action.payload?.data
            };
        default:
            return state;
    }
};

export default lobby;
