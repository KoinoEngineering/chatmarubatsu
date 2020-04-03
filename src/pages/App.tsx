import MainFrame from "components/templates/MainFrame/MainFrame";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ROUTES from "utils/routes";
import Top from "./Top/Top";
import Login from "./Login/Login";

const App: React.FC = () => {
    return <MainFrame>
        <div id="App">
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/" to={ROUTES.LOGIN} />
                    <Route
                        exact
                        path={ROUTES.TOP}
                        component={Top}
                    />
                    <Route
                        exact
                        path={ROUTES.LOGIN}
                        component={Login}
                    />
                </Switch>
            </BrowserRouter>
        </div>;
    </MainFrame>;
};
export default App;