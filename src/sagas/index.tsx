import { fork, all } from "redux-saga/effects";
import { checkUserStateSaga } from "./auth";
import lobbySaga from "pages/Lobby/LobbySaga";
import loginSaga from "pages/Login/LoginSaga";

const rootSaga = function* () {
    yield all([
        checkUserStateSaga(), //auth saga
        ...[
            loginSaga,
            lobbySaga,
        ].map(saga => fork(saga))]);
};

export default rootSaga;