import Header from "components/templates/Header/Header";
import React from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import defaultTheme from "utils/thme";

interface MainFrameProps {
}

const MainFrame: React.FC<MainFrameProps> = props => {
    return <div id="MainFrame">
        <MuiThemeProvider theme={defaultTheme} >
            <CssBaseline />
            <Header />
            {props.children}
        </MuiThemeProvider>
    </div>;
};

export default MainFrame;