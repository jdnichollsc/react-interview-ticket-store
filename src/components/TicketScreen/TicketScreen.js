import React, { useEffect, useState, useMemo, useCallback } from "react";
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
  const [error, setError] = useState()
  const [currentArtist, setCurrentArtist] = useState('')
  const [currentConcert, setCurrentConcert] = useState('')
  const [artists, setArtists] = useState([])
  const [planNames, setPlanNames] = useState([])
  const concerts = useMemo(() => {
    const artist = artists.find((a) => a.name === currentArtist)
    return artist?.concerts || [];
  }, [currentArtist, artists])

  const onLoad = useCallback(async () => {
    try {
      await Promise.all([
        getArtists().then((artists) => setArtists(artists)),
        getPlanNames().then((planNames) => setPlanNames(planNames)),
      ])
    }
    catch (error) {
      setError(error.message)
    }
  }, [])

  useEffect(() => {
    onLoad()
  }, [])
  /*
    The goal here is to populate the first two dropdowns (Artist and Conerts)
    with the correct information.


    Time permitting, we can work on architecting solutions for the remainder of the dropdowns
  */

  if (error) return (<label>{error}</label>)

  return (
    <div className="ticketScreenContainer">
      <div>
        <label> Artist </label>
        <Select value={currentArtist} onChange={(event) => setCurrentArtist(event.target.value)}>
          {artists.map((artist) => <MenuItem key={artist.name} value={artist.name}>{artist.name}</MenuItem>)}
        </Select>
      </div>
      <div>
        <label> Concert </label>
        <Select value={currentConcert} onChange={(event) => setCurrentConcert(event.target.value)}>
          {concerts.map((concert) => <MenuItem key={concert.id} value={concert.id}>{concert.name}</MenuItem>)}
        </Select>
      </div>
      <div>
        <label> Ticket Type (Plan) </label>
        <Select value={currentConcert} onChange={(event) => setCurrentConcert(event.target.value)}>
          {Object.values(planNames).map((planName) => <MenuItem key={planName} value={planName}>{planName}</MenuItem>)}
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
