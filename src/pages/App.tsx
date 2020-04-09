import MainFrame from "components/templates/MainFrame/MainFrame";
import PageContainer from "components/templates/Page/PageContainer";
import { ConnectedRouter } from "connected-react-router";
import { history } from "core/ConfigureStore";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ROUTES from "utils/routes";
import Login from "./Login/Login";
import Top from "./Top/Top";
import FireStoreMonitor from "firebase/FireStoreMonitor";

const App: React.FC = () => {
    return <MainFrame>
        <PageContainer id="App">
            <ConnectedRouter history={history}>
                <FireStoreMonitor />
                <Switch>
                    <Redirect exact from="/" to={ROUTES.LOGIN} />
                    <Route
                        exact
                        path={ROUTES.LOBBY}
                        component={Top}
                    />
                    <Route
                        exact
                        path={ROUTES.LOGIN}
                        component={Login}
                    />
                </Switch>
            </ConnectedRouter>
        </PageContainer>
    </MainFrame>;
};
export default App;