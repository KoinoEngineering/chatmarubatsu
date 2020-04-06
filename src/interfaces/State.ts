import { LoginState } from "pages/Login/LoginTypes";
import { RouterState } from "connected-react-router";
import { TopState } from "pages/Top/TopTypes";

export interface State {
    router: RouterState
    login: LoginState;
    top: TopState;
}