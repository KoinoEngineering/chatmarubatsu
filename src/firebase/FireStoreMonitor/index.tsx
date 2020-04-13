import React from "react";
import { Route, Switch } from "react-router";
import ROUTES from "utils/routes";
import LobbyMonitor from "./LobbyMonitor";

const FireStoreMonitor = () => {
    return <Switch>
        <Route path={ROUTES.LOBBY}>
            <LobbyMonitor />
        </Route>
    </Switch >;
};

export default FireStoreMonitor;