import Header from "components/templates/Header/Header";
import React from "react";

interface MainFrameProps {
}

const MainFrame: React.FC<MainFrameProps> = props => {
    return <div id="MainFrame">
        <Header />
        {props.children}
    </div>;
};

export default MainFrame;