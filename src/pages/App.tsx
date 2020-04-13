import { createStyles, makeStyles } from "@material-ui/core";
import MainFrame from "components/templates/MainFrame/MainFrame";
import PrivateRoute from "components/templates/PrivateRoute";
import { ConnectedRouter } from "connected-react-router";
import { history } from "core/ConfigureStore";
import FireStoreMonitor from "firebase/FireStoreMonitor";
import React from "react";
import { Redirect, Route as PublicRoute, Switch } from "react-router-dom";
import ROUTES from "utils/routes";
import Lobby from "./Lobby/Lobby";
import Login from "./Login/Login";

const useStyles = makeStyles(
    createStyles({
        root: { height: "100%" }
    }));

const App: React.FC = () => {
    const classes = useStyles();
    return <MainFrame>
        <div id="App" className={classes.root}>
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
        </div>
    </MainFrame>;
};
export default App;