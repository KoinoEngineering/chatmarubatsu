import { render } from "@testing-library/react";
import React from "react";
import Top from "pages/Top/Top";

test("renders learn react link", () => {
    const { getByText } = render(<Top />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
