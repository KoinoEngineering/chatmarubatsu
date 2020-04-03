import React from "react";
import logo from "logo.svg";
import "./Top.css";
import { firestore } from "firebase/firebase.config";

function Top() {
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
        </div>
    );
}

export default Top;