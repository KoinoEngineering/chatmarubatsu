import { Button, Card, CardActions, CardContent, Container, Grid, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { GridRow } from "components/templates/GridRow/GridRow";
import { firestore } from "firebase/firebase.config";
import { State } from "interfaces/State";
import React, { useEffect, useMemo } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import topActionCreators from "./TopActions";
import { TopState } from "./TopTypes";
import { MyUser } from "interfaces/firestore/users/User";

function Top() {
    const dispatch = useDispatch();
    const { data } = useSelector<State, TopState>(state => state.top);
    const actions = useMemo(() => {
        return bindActionCreators(topActionCreators, dispatch);
    }, [dispatch]);

    return (
        <div className="Top">
            <Flipper flipKey={data?.map(d => d.id).join(",")}>
                <Grid>
                    <GridRow >
                        {data?.map(d =>
                            <Flipped key={d.id} flipId={d.id}>
                                <Grid item style={{ width: 150, }}>
                                    <Container style={{ padding: "1rem" }}>
                                        <Card style={{ wordWrap: "break-word" }}>
                                            <CardActions>
                                                <Grid container justify="flex-end">
                                                    <IconButton edge="end" onClick={() => actions.removeItem(d.id)}>
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
                        <Button variant="outlined" onClick={() => actions.addItem()}>追加</Button>
                    </GridRow>
                    <GridRow justify="center">
                        <Button variant="outlined" onClick={() => actions.logOut()}>ログアウト</Button>
                    </GridRow>
                </Grid>
            </Flipper>
        </div >
    );
}

export default Top;
