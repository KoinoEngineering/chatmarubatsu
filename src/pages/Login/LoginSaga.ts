import { takeLeading, call, put } from "redux-saga/effects";
import { ActionType } from "./LoginActions";
import { auth } from "firebase/firebase.config";
import { push } from "connected-react-router";
import ROUTES from "utils/routes";

const loginSaga = function* () {
    yield takeLeading(ActionType.LOGIN, clickLoginSaga);
};

const clickLoginSaga = function* () {

    try {
        yield call(callLogin);
        yield put(push(ROUTES.TOP));
    } catch (error) {
        console.log(error);
    }
};

export default loginSaga;

const callLogin = async () => auth.signInAnonymously().catch(err => {
    console.log(err);
});
