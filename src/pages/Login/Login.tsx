import { Button, Card, createStyles, FormControl, Grid, InputLabel, makeStyles, OutlinedInput, Typography } from "@material-ui/core";
import { GridRow } from "components/templates/GridRow/GridRow";
import { Propsof } from "interfaces/Props";
import { State } from "interfaces/State";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import loginActionCreators from "./LoginActions";
import { LoginState } from "./LoginTypes";
import PageContainer from "components/templates/Page/PageContainer";

const useCardStyles = makeStyles(
    createStyles({
        root: {
            padding: 50,
            maxWidth: 1000,
            height: "min-content"
        }
    }));

const useStyles = makeStyles(createStyles({
    root: {
        height: "100%"
    }
}));
const Login: React.FC = () => {
    const classes = useStyles();
    const cardClasses = useCardStyles();
    const dispatch = useDispatch();
    const { name } = useSelector<State, LoginState>(state => state.login);
    const actions = useMemo(() => bindActionCreators({
        ...loginActionCreators
    }, dispatch), [dispatch]);

    const handleChangeText = (key: keyof LoginState): Propsof<typeof OutlinedInput>["onChange"] => (e) => actions.changeText({
        [key]: e.currentTarget.value
    });
    return <PageContainer id="Login">
        <Grid container justify="center" alignItems="center" classes={classes}>
            <Card classes={cardClasses} raised>
                <Grid container>
                    <GridRow justify="center">
                        <Grid item>
                            <Typography>ログイン名(任意)を</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>入力してください</Typography>
                        </Grid>
                    </GridRow>
                    <GridRow alignItems="center">
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="component-outlined">Name</InputLabel>
                            <OutlinedInput id="name" value={name} label="Name" onChange={handleChangeText("name")} />
                        </FormControl>
                    </GridRow>
                    <GridRow justify="center">
                        <Button variant="outlined" onClick={() => actions.logIn()}>ログイン</Button>
                    </GridRow>
                </Grid>
            </Card>
        </Grid>
    </PageContainer>;
};

export default Login;