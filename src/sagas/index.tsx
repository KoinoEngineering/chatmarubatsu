import { fork, all } from "redux-saga/effects";
import { checkUserStateSaga } from "./auth";
import topSaga from "pages/Top/TopSaga";
import loginSaga from "pages/Login/LoginSaga";

const rootSaga = function* () {
    yield all([
        checkUserStateSaga(), //auth saga
        ...[
            loginSaga,
            topSaga,
        ].map(saga => fork(saga))]);
};

export default rootSaga;