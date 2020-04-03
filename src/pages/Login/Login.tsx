import { Card, FormControl, Grid, InputLabel, OutlinedInput, Button, createStyles, makeStyles } from "@material-ui/core";
import { GridRow } from "components/templates/GridRow/GridRow";
import React from "react";

const useStyles = makeStyles(
    createStyles({
        root: {
            paddingTop: 5,
            paddingBottom: 10,
        }
    }));

const Login: React.FC = () => {
    const classes = useStyles();
    return <div id="Login">
        <Card classes={classes}>
            <Grid container>
                <GridRow alignItems="center">
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined">Name</InputLabel>
                        <OutlinedInput id="component-outlined" label="Name" />
                    </FormControl>
                </GridRow>
                <GridRow >
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined">Name</InputLabel>
                        <OutlinedInput id="component-outlined" label="Name" />
                    </FormControl>
                </GridRow>
                <GridRow >
                    <Button variant="outlined">ログイン</Button>
                </GridRow>
            </Grid>
        </Card>
    </div>;
};

export default Login;