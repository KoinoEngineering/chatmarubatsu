import { LoginState, LoginActions } from "./LoginTypes";
import { Reducer } from "redux";
import { ActionType } from "./LoginActions";

const initialState = (): LoginState => ({
    name: ""
});

const login: Reducer<LoginState, LoginActions> = (state = initialState(), action) => {
    switch (action.type) {
        case ActionType.CHANGE_TEXT:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default login;
