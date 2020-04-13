import { push } from "connected-react-router";
import * as firebase from "firebase/app";
import { auth } from "firebase/firebase.config";
import { call, put, takeLeading } from "redux-saga/effects";
import ROUTES from "utils/routes";
import { ActionType } from "./LoginActions";

const loginSaga = function* () {
    yield takeLeading(ActionType.LOGIN, clickLoginSaga);
};

const clickLoginSaga = function* () {

    try {
        yield call(callLogin);
        yield put(push(ROUTES.LOBBY));
    } catch (error) {
        console.log(error);
    }
};

export default loginSaga;

const callLogin = async () =>
    auth
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => auth.signInAnonymously())
    ;
