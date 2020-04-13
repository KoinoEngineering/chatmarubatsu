import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import createRootReducer from "reducers";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: "root",
    storage,
};

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));

const store = createStore(persistedReducer, applyMiddleware(
    routerMiddleware(history), // for dispatching history actions
    sagaMiddleware,
    logger));

sagaMiddleware.run(rootSaga);
export default {
    store,
    persistor: persistStore(store)
};