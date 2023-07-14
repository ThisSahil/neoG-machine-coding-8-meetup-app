import React from "react";
import { MeetingState } from "../context/Context";
import MeetingCard from "./MeetingCard";
import "./Main.css";
import Dropdown from "./Dropdown";

const Main = () => {
  const { meetingState, meetingDispatch } = MeetingState();

  const meetups = meetingState.meetings.meetups;

  let updated = meetups;

  if (meetingState.filter === "Online" || meetingState.filter === "Offline") {
    updated = meetups.filter(
      (meetup) => meetup.eventType === meetingState.filter
    );
  } else if (meetingState.filter === "Both") {
    updated = meetups;
  }

  if (meetingState.search) {
    updated = updated.filter((meetup) => {
      const title = meetup.title.toLowerCase();
      const search = meetingState.search.toLowerCase();
      const lowerCaseTags = meetup.eventTags.map((tag) => tag.toLowerCase());

      return title.includes(search) || lowerCaseTags.includes(search);
    });
  }

  if (!meetups) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="details">
        <h2 className="main-head">Meetup Events</h2>
        <Dropdown />
      </div>

      <div className="all-meet">
        {updated.map((meetup) => (
          <>
            <MeetingCard meetup={meetup} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Main;
