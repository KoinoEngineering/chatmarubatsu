import Top from "pages/Top/Top";
import React from "react";
import { renderWithProvider } from "test/tetutils";

test("snapshot testing", () => {
    const top = renderWithProvider(
        <Top />
    );
    expect(top).toMatchSnapshot();
});
