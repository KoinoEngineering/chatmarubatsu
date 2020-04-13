import Lobby from "pages/Lobby/Lobby";
import React from "react";
import { renderWithProvider } from "test/tetutils";

test("snapshot testing", () => {
    const top = renderWithProvider(
        <Lobby />
    );
    expect(top).toMatchSnapshot();
});
