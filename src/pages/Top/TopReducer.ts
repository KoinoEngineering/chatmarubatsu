import { Reducer } from "redux";
import { TopActions, TopState } from "./TopTypes";

const initialState = (): TopState => ({
});

const top: Reducer<TopState, TopActions> = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default top;
