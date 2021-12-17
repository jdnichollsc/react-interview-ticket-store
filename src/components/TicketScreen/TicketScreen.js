import React, { useEffect, useState } from "react";
import { Select, MenuItem, Input } from "@material-ui/core";
import {
  getArtists,
  getConcertTicketCosts,
  getPlanNames,
  getTotalCost
} from "../../utils/ticketUtils";
import "./TicketScreen.css";

const TicketScreen = () => {
  const numberOfTickets = 2;
  const total = 2;
  /*
    The goal here is to populate the first two dropdowns (Artist and Conerts)
    with the correct information.


    Time permitting, we can work on architecting solutions for the remainder of the dropdowns
  */
  return (
    <div className="ticketScreenContainer">
      <div>
        <label> Artist </label>
        <Select value={"Taylor Swift"}>
          <MenuItem value={"Taylor Swift"}>Taylor Swift</MenuItem>
        </Select>
      </div>
      <div>
        <label> Concert </label>
        <Select value="Taylor Swift June Tour">
          <MenuItem value="Taylor Swift June Tour">
            Taylor Swift June Tour
          </MenuItem>
          <MenuItem value="Taylor Swift July Tour">
            Taylor Swift July Tour
          </MenuItem>
        </Select>
      </div>
      <div>
        <label> Ticket Type (Plan) </label>
        <Select value="Basic">
          <MenuItem value="Basic">Basic</MenuItem>
        </Select>
      </div>
      <div>
        <label> Number of Tickets </label>
        <Input value={numberOfTickets} />
      </div>
      <div>
        <label> Total </label>
        <div className="total">{`$${total}`}</div>
      </div>
    </div>
  );
};
export default TicketScreen;
