import { combineReducers } from "redux";
import { State } from "interfaces/State";
import login from "pages/Login/LoginReducer";
import lobby from "pages/Lobby/LobbyReducer";
import { connectRouter } from "connected-react-router";
import * as H from "history";

const createRootReducer = (history: H.History) => combineReducers<State>({
    router: connectRouter(history),
    login,
    lobby
});
export default createRootReducer;