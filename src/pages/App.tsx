import MainFrame from "components/templates/MainFrame/MainFrame";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ROUTES from "utils/routes";
import Top from "./Top/Top";

const App: React.FC = () => {
    return <MainFrame>
        <div id="App">
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
    </MainFrame>;
};
export default App;