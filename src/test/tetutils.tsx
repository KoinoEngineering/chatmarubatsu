import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "core/ConfigureStore";
import React from "react";

export const renderWithProvider = (Target: React.ReactNode) => render(
    <React.StrictMode>
        <Provider store={configureStore}>
            {Target}
        </Provider>
    </React.StrictMode>,
);