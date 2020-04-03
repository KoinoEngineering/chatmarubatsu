import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Top from "./Top/Top";
import ROUTES from "utils/routes";

const App: React.FC = () => {
    return <div id="Routes">
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to={ROUTES.APP} />
                <Route
                    exact
                    path={ROUTES.APP}
                    component={Top}
                />
            </Switch>
        </BrowserRouter>
    </div>;
};
export default App;