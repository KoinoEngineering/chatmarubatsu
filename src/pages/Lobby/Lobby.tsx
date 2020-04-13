import { Button, Card, CardContent, CardHeader, Container, createStyles, Dialog, Grid, IconButton, makeStyles, Slide, TextField } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import DeleteIcon from "@material-ui/icons/Delete";
import { GridRow } from "components/templates/GridRow/GridRow";
import PageContainer from "components/templates/Page/PageContainer";
import { routerActions } from "connected-react-router";
import { State } from "interfaces/State";
import React, { useMemo } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import topActionCreators from "./LobbyActions";
import { LobbyState } from "./LobbyTypes";
import CloseIcon from "@material-ui/icons/Close";
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

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
    const { rooms, addRoomModal, newRoomName, newRoomNameError: newRoomValidate } = useSelector<State, LobbyState>(state => state.lobby);
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
                                                        <IconButton classes={cardButtonclasses} onClick={() => actions.removeRoom({ id: d.id })}>
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
                            <Button variant="outlined" onClick={() => actions.toggleAddRoomModal()}>ルームを作成</Button>
                        </GridRow>
                        <GridRow justify="center">
                            <Button variant="outlined" onClick={() => actions.logOut()}>ログアウト</Button>
                        </GridRow>
                    </Grid>
                </Flipper>
            </PageContainer >
            <Dialog
                {...addRoomModal}
                TransitionComponent={Transition}
                id="AddRoomModal"
                onBackdropClick={() => actions.toggleAddRoomModal()}
            >
                <Container>
                    <Card>
                        <CardHeader
                            title="作成するルーム名を入力してください"
                            action={
                                <IconButton classes={cardButtonclasses} onClick={() => actions.toggleAddRoomModal()}>
                                    <CloseIcon />
                                </IconButton>
                            }
                            classes={cardHeaderclasses}
                        />
                        <CardContent>
                            <Grid>
                                <GridRow>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            value={newRoomName}
                                            error={!!newRoomValidate}
                                            onChange={(e) => actions.changeNewroomName({ newRoomName: e.currentTarget.value })}
                                            helperText={newRoomValidate}
                                        />
                                    </Grid>
                                </GridRow>
                                <GridRow>
                                    <Grid item xs={12}>
                                        <Button variant="outlined" disabled={!!newRoomValidate} onClick={() => actions.addRoom()}>ルームを作成</Button>
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
