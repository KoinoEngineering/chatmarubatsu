import { Button, Card, CardContent, CardHeader, Container, Grid, IconButton, makeStyles, createStyles, Dialog, TextField } from "@material-ui/core";
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
import PageContainer from "components/templates/Page/PageContainer";

const useCardButtonStyles = makeStyles(createStyles({
    root: {
        position: "absolute",
        right: 0,
        zIndex: 100
    }
}));

const useCardHeaderStyles = makeStyles(createStyles({
    root: {
        position: "relative",
    }
}));


function Lobby() {
    const dispatch = useDispatch();
    const { rooms, addRoomModal, newRoomName } = useSelector<State, LobbyState>(state => state.lobby);
    const actions = useMemo(() => {
        return {
            ...bindActionCreators(topActionCreators, dispatch),
            navigate: bindActionCreators(routerActions, dispatch)
        };
    }, [dispatch]);

    const cardButtonclasses = useCardButtonStyles();
    const cardHeaderclasses = useCardHeaderStyles();
    return (
        <>
            <PageContainer id="Lobby">
                <Flipper flipKey={rooms?.map(d => d.id).join(",")}>
                    <Grid>
                        <GridRow >
                            {rooms?.map(d =>
                                <Flipped key={d.id} flipId={d.id}>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Container style={{ padding: "1rem" }}>
                                            <Card style={{ wordWrap: "break-word" }}>
                                                <CardHeader
                                                    title={d.id}
                                                    action={
                                                        <IconButton classes={cardButtonclasses}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    }
                                                    classes={cardHeaderclasses}
                                                />
                                                <CardContent>
                                                    {JSON.stringify(d)}
                                                </CardContent>
                                            </Card>
                                        </Container>
                                    </Grid>
                                </Flipped>
                            )}
                        </GridRow>
                        <GridRow justify="center">
                            <Button variant="outlined" onClick={() => actions.toggleAddRoomModal()}>ルームを追加</Button>
                        </GridRow>
                        <GridRow justify="center">
                            <Button variant="outlined" onClick={() => actions.logOut()}>ログアウト</Button>
                        </GridRow>
                    </Grid>
                </Flipper>
            </PageContainer >
            <Dialog
                {...addRoomModal}
                id="AddRoomModal"
                onBackdropClick={() => actions.toggleAddRoomModal()}
            >
                <Container>
                    <Card>
                        <CardHeader />
                        <CardContent>
                            <Grid>
                                <GridRow>
                                    <Grid item xs={12}>
                                        <TextField value={newRoomName} onChange={(e) => actions.changeNewroomName({ newRoomName: e.currentTarget.value })} />
                                    </Grid>
                                </GridRow>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </Dialog>
        </>
    );
}

export default Lobby;
