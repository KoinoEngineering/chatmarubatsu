import { auth, firestore, StorePath } from "firebase/firebase.config";
import { State } from "interfaces/State";
import { call, put, select, takeLatest, takeLeading, throttle } from "redux-saga/effects";
import lobbyActionCreators from "./LobbyActions";
import { ActionType, LobbyState, LobbyRemoveRoomAction } from "./LobbyTypes";
import { PromiseOf } from "interfaces/utils";

const lobbySaga = function* () {
    yield takeLeading(ActionType.LOGOUT, logoutSaga);
    yield throttle(500, ActionType.CHANGE_NEWROOM_NAME, changeNewroomNameSaga);
    yield takeLatest(ActionType.TOGGLE_ADD_ROOM_MODAL, toggleAddRoomModalSaga);
    yield takeLeading(ActionType.ADD_ROOM, addRoomSaga);
    yield takeLeading(ActionType.REMOVE_ROOM, removeRoomSaga);
};

const logoutSaga = function* () {

    try {
        yield call(callLogout);
    } catch (error) {
        console.log(error);
    }
};

const validateRoomName = function* () {
    const validateRoomName = async (newRoomname?: string) => newRoomname ? firestore
        .collection(StorePath.ROOMS)
        .doc(newRoomname)
        .get()
        .then((doc) => doc.exists ? "そのルーム名は使用されています" : undefined) : "ルーム名を入力してください";
    const lobby = (yield select<(state: State) => LobbyState>(state => state.lobby)) as Readonly<LobbyState>;
    const newRoomNameError: PromiseOf<ReturnType<typeof validateRoomName>> = yield call(validateRoomName, lobby.newRoomName);
    yield put(lobbyActionCreators.newroomNameValidate({
        newRoomNameError
    }));
};

const changeNewroomNameSaga = function* () {
    yield validateRoomName();
};

const toggleAddRoomModalSaga = function* () {
    const lobby = (yield select<(state: State) => LobbyState>(state => state.lobby)) as Readonly<LobbyState>;
    if (!lobby.addRoomModal.open) {
        yield put(lobbyActionCreators.changeNewroomName({ newRoomName: undefined }));
    }
};

const addRoomSaga = function* () {
    yield validateRoomName();
    const lobby = (yield select<(state: State) => LobbyState>(state => state.lobby)) as Readonly<LobbyState>;
    if (!lobby.newRoomNameError) {
        firestore.collection(StorePath.ROOMS).doc(lobby.newRoomName).set({});
    }
    yield put(lobbyActionCreators.toggleAddRoomModal());
};

const removeRoomSaga = function* (action: LobbyRemoveRoomAction) {
    yield call(async () => firestore.collection(StorePath.ROOMS).doc(action.payload.id).delete());
};

export default lobbySaga;

const callLogout = async () => auth.signOut();
