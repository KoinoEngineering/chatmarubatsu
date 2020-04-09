import { auth } from "firebase/firebase.config";
import { call, takeLeading } from "redux-saga/effects";
import { ActionType } from "./LobbyTypes";

const lobbySaga = function* () {
    yield takeLeading(ActionType.LOGOUT, logoutSaga);
};

const logoutSaga = function* () {

    try {
        yield call(callLogout);
    } catch (error) {
        console.log(error);
    }
};

export default lobbySaga;

const callLogout = async () => auth.signOut();
