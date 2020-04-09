import { auth, firestore } from "firebase/firebase.config";
import { call, takeLatest, takeLeading, put } from "redux-saga/effects";
import topActionCreators, { ActionType } from "./LobbyActions";
import { MyUser } from "interfaces/firestore/users/User";
import { LobbyRemoveItemAction, LobbyRemoveItemPayload } from "./LobbyTypes";

const topSaga = function* () {
    yield takeLeading(ActionType.LOGOUT, logoutSaga);
    yield takeLatest(ActionType.GET_USERS, getUsersSaga);
    yield takeLatest(ActionType.ADD_ITEM, addItemSaga);
    yield takeLatest(ActionType.REMOVE_ITEM, removeItem);
};

const logoutSaga = function* () {

    try {
        yield call(callLogout);
    } catch (error) {
        console.log(error);
    }
};

const getUsersSaga = function* () {
    const myUsers: MyUser[] = yield call(getUsers);
    yield put(topActionCreators.setUsers(myUsers));
};

const addItemSaga = function* () {
    try {
        yield call(async () => firestore.collection("users").add({}));
        // yield put(topActionCreators.getUsers());
    } catch (e) {
        console.log(e);
    }
};

const removeItem = function* (action: LobbyRemoveItemAction) {
    try {
        if (!action.payload?.id) {
            throw new Error(`target id is ${action.payload?.id}`);
        }
        yield call(removeUser, action.payload.id);
    } catch (e) {
        console.log(e);
    }
};

export default topSaga;

const callLogout = async () => auth.signOut();

const getUsers = async () => firestore.collection("users").get().then(usersRef => {
    const ret: MyUser[] = [];
    usersRef.forEach(user =>
        ret.push({
            id: user.id,
            ...user.data()
        } as MyUser));
    return ret;
});

const removeUser = async (id: LobbyRemoveItemPayload["id"]) =>
    firestore
        .collection("users")
        .doc(id)
        .delete()
        .catch((err) => console.log(err));