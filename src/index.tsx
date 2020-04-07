import configureStore from "core/ConfigureStore";
import { firestore } from "firebase/firebase.config";
import App from "pages/App";
import topActionCreators from "pages/Top/TopActions";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { MyUser } from "interfaces/firestore/users/User";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={configureStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

firestore
    .collection("users")
    .onSnapshot(docSnapshot => {
        const docs: MyUser[] = [];
        docSnapshot.forEach(d => {
            docs.push({ id: d.id, ...d.data() });
        });
        console.log(docs);
        configureStore.dispatch(topActionCreators.setUsers(docs));
    }, err => {
        throw err;
    });