import { Reducer } from "redux";
import { TopActions, TopState } from "./TopTypes";
import { ActionType } from "./TopActions";

const initialState = (): TopState => ({
});

const top: Reducer<TopState, TopActions> = (state = initialState(), action) => {
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
