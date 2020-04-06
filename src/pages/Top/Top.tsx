import React, { useMemo } from "react";
import logo from "logo.svg";
import "./Top.css";
import { firestore } from "firebase/firebase.config";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import topActionCreators from "./TopActions";

function Top() {
    const dispatch = useDispatch();
    const actions = useMemo(() => {
        return bindActionCreators(topActionCreators, dispatch);
    }, [dispatch]);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                    {firestore.toString()}
                </a>
            </header>
            <div>
                <Button onClick={() => actions.logOut()}>ログアウト</Button>
            </div>
        </div>
    );
}

export default Top;
