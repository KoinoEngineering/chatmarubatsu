import MainFrame from "components/templates/MainFrame/MainFrame";
import PageContainer from "components/templates/Page/PageContainer";
import PrivateRoute from "components/templates/PrivateRoute";
import { ConnectedRouter } from "connected-react-router";
import { history } from "core/ConfigureStore";
import FireStoreMonitor from "firebase/FireStoreMonitor";
import React from "react";
import { Redirect, Route as PublicRoute, Switch } from "react-router-dom";
import ROUTES from "utils/routes";
import Lobby from "./Lobby/Lobby";
import Login from "./Login/Login";

const App: React.FC = () => {
    return <MainFrame>
        <PageContainer id="App">
            <ConnectedRouter history={history}>
                <FireStoreMonitor />
                <Switch>
                    <Redirect exact from="/" to={ROUTES.LOGIN} />
                    <PrivateRoute
                        exact
                        path={ROUTES.LOBBY}
                        component={Lobby}
                    />
                    <PublicRoute
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