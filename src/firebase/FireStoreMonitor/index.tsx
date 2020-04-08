import React from "react";
import { Route, Switch } from "react-router";
import ROUTES from "utils/routes";
import TopMonitor from "./TopMonitor";

const FireStoreMonitor = () => {
    return <Switch>
        <Route path={ROUTES.TOP}>
            <TopMonitor />
        </Route>
    </Switch >;
};

export default FireStoreMonitor;