import Top from "pages/Lobby/Lobby";
import React from "react";
import { renderWithProvider } from "test/tetutils";

test("snapshot testing", () => {
    const top = renderWithProvider(
        <Top />
    );
    expect(top).toMatchSnapshot();
});
