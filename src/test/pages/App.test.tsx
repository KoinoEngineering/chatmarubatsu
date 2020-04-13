import App from "pages/App";
import React from "react";
import { renderWithProvider } from "test/tetutils";

test("snapshot testing", () => {
    const component = renderWithProvider(
        <App />
    );
    expect(component).toMatchSnapshot();
});
