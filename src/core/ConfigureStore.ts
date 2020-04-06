import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import createRootReducer from "reducers";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const configureStore = createStore(createRootReducer(history), applyMiddleware(
    routerMiddleware(history), // for dispatching history actions
    sagaMiddleware,
    logger));

sagaMiddleware.run(rootSaga);
export default configureStore;