import { combineReducers } from "redux";
import { State } from "interfaces/State";
import login from "pages/Login/LoginReducer";
import top from "pages/Top/TopReducer";
import { connectRouter } from "connected-react-router";
import * as H from "history";

const createRootReducer = (history: H.History) => combineReducers<State>({
    router: connectRouter(history),
    login,
    lobby: top
});
export default createRootReducer;