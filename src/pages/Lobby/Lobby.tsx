import { Button, Card, CardActions, CardContent, Container, Grid, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { GridRow } from "components/templates/GridRow/GridRow";
import { routerActions } from "connected-react-router";
import { State } from "interfaces/State";
import React, { useMemo } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import topActionCreators from "./LobbyActions";
import { LobbyState } from "./LobbyTypes";

function Lobby() {
    const dispatch = useDispatch();
    const { rooms } = useSelector<State, LobbyState>(state => state.lobby);
    const actions = useMemo(() => {
        return {
            ...bindActionCreators(topActionCreators, dispatch),
            navigate: bindActionCreators(routerActions, dispatch)
        };
    }, [dispatch]);

    return (
        <div className="Top">
            <Flipper flipKey={rooms?.map(d => d.id).join(",")}>
                <Grid>
                    <GridRow >
                        {rooms?.map(d =>
                            <Flipped key={d.id} flipId={d.id}>
                                <Grid item style={{ width: 150, }}>
                                    <Container style={{ padding: "1rem" }}>
                                        <Card style={{ wordWrap: "break-word" }}>
                                            <CardActions>
                                                <Grid container justify="flex-end">
                                                    <IconButton edge="end">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Grid>
                                            </CardActions>
                                            <CardContent>
                                                {d.id}
                                            </CardContent>
                                        </Card>
                                    </Container>
                                </Grid>
                            </Flipped>
                        )}
                    </GridRow>
                    <GridRow justify="center">
                        <Button variant="outlined" >追加</Button>
                    </GridRow>
                    <GridRow justify="center">
                        <Button variant="outlined" onClick={() => actions.logOut()}>ログアウト</Button>
                    </GridRow>
                </Grid>
            </Flipper>
        </div >
    );
}

export default Lobby;
