import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MeetingState } from "../context/Context";
import "./EventDetail.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./Modal.css";

const EventDetail = () => {
  const { id } = useParams();
  const { meetingState, meetingDispatch } = MeetingState();

  const meetups = meetingState.meetings.meetups;

  const curmeet = meetups.find((meetup) => meetup.id === id);

  const eventSDate = new Date(curmeet.eventStartTime);
  const eventSDateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const eventSDateformattedDateTime = eventSDate.toLocaleString(
    "en-US",
    eventSDateOptions
  );

  const eventEDate = new Date(curmeet.eventEndTime);
  const eventEDateoptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const eventEDateformattedDateTime = eventEDate.toLocaleString(
    "en-US",
    eventEDateoptions
  );

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [btntext, setBtnText] = useState("RSVP");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);

    if (name && email) {
      setEmail("");
      setName("");
      setBtnText("Already RSVPed");
      closeModal();
    }
  };

  const eventTime = new Date(curmeet.eventStartTime);
  const isEventPassed = Date.now() > eventTime.getTime();

  return (
    <div className="full-details">
      <div className="all-details">
        <h1>{curmeet.title}</h1>

        <div className="host">
          <div>Hosted By:</div>
          <h4>{curmeet.hostedBy}</h4>
        </div>

        <img className="event-image" src={curmeet.eventThumbnail} />

        <div className="description">
          <h3>Details:</h3>
          <p>{curmeet.eventDescription}</p>
        </div>

        <div className="additional">
          <h2>Additional Information:</h2>

          <span>
            <h4 style={{ display: "inline" }}>Dress Code: </h4>
            {curmeet.additionalInformation.dressCode}
          </span>
          <div>
            <h4 style={{ display: "inline" }}>Age Restrictions: </h4>
            {curmeet.additionalInformation.ageRestrictions}
          </div>
        </div>

        <div className="events">
          <h2>Event Tags:</h2>
          <div className="single-event">
            {curmeet.eventTags.map((tag) => (
              <div className="tag">{tag}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="misc">
        <div className="other-details">
          <div className="timing">
            <AccessTimeIcon />
            <div style={{ marginLeft: "0.5rem" }}>
              <div>{eventSDateformattedDateTime} to </div>
              <div>{eventEDateformattedDateTime}</div>
            </div>
          </div>

          <div className="location">
            <LocationOnOutlinedIcon />
            <div style={{ marginLeft: "0.5rem" }}>
              <div>{curmeet.location}</div>
              <div>{curmeet.address}</div>
            </div>
          </div>

          <div className="price">₹{curmeet.price}</div>
        </div>

        <div className="speakers">
          <h1>Speakers: ({curmeet.speakers.length})</h1>

          <div className="temp">
            {curmeet.speakers.map((speaker) => (
              <div className="single">
                <img className="speaker-img" src={speaker.image} />
                <h3>{speaker.name}</h3>
                <div>{speaker.designation}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rsvp">
          {!isEventPassed && (
            <button
              disabled={btntext === "Already RSVPed"}
              onClick={openModal}
              className="btn-rsvp"
            >
              {btntext}
            </button>
          )}
        </div>
      </div>

      <div className="modal-container">
        {isOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div>
                <h2>Complete your RSVP.</h2>
                <p style={{ color: "gray" }}>
                  Fill in your personal information
                </p>
              </div>
              <form className="modal-form" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                {curmeet.price !== "Free" && (
                  <p style={{ color: "gray" }}>
                    You have to make the payment at the venue
                  </p>
                )}
                <div className="modal-buttons">
                  <button className="submit-btn" type="submit">
                    RSVP
                  </button>
                  <button className="close-button" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
