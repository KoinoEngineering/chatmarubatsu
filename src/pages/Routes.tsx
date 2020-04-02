import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App/App";
import ROUTES from "utils/routes";

const Routes: React.FC = () => {
    return <div id="Routes">
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to={ROUTES.APP} />
                <Route
                    exact
                    path={ROUTES.APP}
                    component={App}
                />
            </Switch>
        </BrowserRouter>
    </div>;
};
export default Routes;