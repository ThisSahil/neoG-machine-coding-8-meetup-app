import React from "react";
import { useParams } from "react-router-dom";
import { MeetingState } from "../context/Context";
import "./EventDetail.css";

const EventDetail = () => {
  const { id } = useParams();
  const { meetingState, meetingDispatch } = MeetingState();

  const meetups = meetingState.meetings.meetups;

  const curmeet = meetups.find((meetup) => meetup.id === id);

  return (
    <div>
      <h1>{curmeet.title}</h1>

      <div>
        <div>Hosted By:</div>
        <h5>{curmeet.hostedBy}</h5>
      </div>

      <img src={curmeet.eventThumbnail} />

      <div className="description">
        <h3>Details:</h3>
        <p>{curmeet.eventDescription}</p>
      </div>

      <div className="additional">
        <h2>Additional Information:</h2>

        <div>
          <h5>Dress Code: </h5>
          {curmeet.additionalInformation.dressCode}
        </div>
        <div>
          <h5>Age Restrictions: </h5>
          {curmeet.additionalInformation.ageRestrictions}
        </div>
      </div>

      <div>
        <h2>Event Tags:</h2>
        {curmeet.eventTags.map((tag) => (
          <div>{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default EventDetail;
