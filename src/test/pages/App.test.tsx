import App from "pages/App";
import React from "react";
import { renderWithProvider } from "test/tetutils";

test("snapshot testing", () => {
    const top = renderWithProvider(
        <App />
    );
    expect(top).toMatchSnapshot();
});
