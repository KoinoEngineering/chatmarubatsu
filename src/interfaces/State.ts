import { LoginState } from "pages/Login/LoginTypes";
import { RouterState } from "connected-react-router";
import { LobbyState } from "pages/Top/TopTypes";

export interface State {
    router: RouterState
    login: LoginState;
    lobby: LobbyState;
}