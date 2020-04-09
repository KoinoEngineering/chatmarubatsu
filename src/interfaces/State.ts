import { LoginState } from "pages/Login/LoginTypes";
import { RouterState } from "connected-react-router";
import { LobbyState } from "pages/Lobby/LobbyTypes";

export interface State {
    router: RouterState
    login: LoginState;
    lobby: LobbyState;
}