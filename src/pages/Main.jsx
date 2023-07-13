import React from "react";
import { MeetingState } from "../context/Context";
import MeetingCard from "./MeetingCard";
import "./Main.css";
import Dropdown from "./Dropdown";

const Main = () => {
  const { meetingState, meetingDispatch } = MeetingState();

  const meetups = meetingState.meetings.meetups;
  return (
    <div>
      <div className="details">
        <h2>Meetup Events</h2>
        <Dropdown />
      </div>

      <div className="all-meet">
        {meetups.map((meetup) => (
          <>
            <MeetingCard meetup={meetup} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Main;
