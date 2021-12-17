import React from "react";
import { render } from "@testing-library/react";
import TicketScreen from "./TicketScreen";
describe("Ticket Screen tests", () => {
  it("loads", () => {
    const { getByText } = render(<TicketScreen />);
    expect(getByText("$2")).toBeTruthy();
    //expect(getByText("$2")).toBeInDocument();
  });
});
