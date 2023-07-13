import React from "react";
import "./MeetingCard.css";
import { useNavigate } from "react-router-dom";

const MeetingCard = ({ meetup }) => {
  const navigate = useNavigate();

  const handleMeetingClick = () => {
    navigate(`/${meetup.id}`);
  };

  return (
    <div className="meetupcard" onClick={handleMeetingClick}>
      <img className="meetupimage" src={meetup.eventThumbnail} />
      <div className="time">{meetup.eventStartTime}</div>
      <h3 className="heading">{meetup.title}</h3>
      <h5 className="type">{meetup.eventType}</h5>
    </div>
  );
};

export default MeetingCard;
