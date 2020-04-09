import { Reducer } from "redux";
import { LobbyActions, LobbyState } from "./TopTypes";
import { ActionType } from "./TopActions";

const initialState = (): LobbyState => ({
});

const top: Reducer<LobbyState, LobbyActions> = (state = initialState(), action) => {
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

export default top;
