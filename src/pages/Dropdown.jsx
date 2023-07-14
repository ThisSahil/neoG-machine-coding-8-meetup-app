import React, { useState } from "react";
import "./Dropdown.css";
import { MeetingState } from "../context/Context";

const Dropdown = () => {
  // const [selectedOption, setSelectedOption] = useState("");

  const { meetingState, meetingDispatch } = MeetingState();

  const handleChange = (event) => {
    // console.log(event.target.value);
    // setSelectedOption(event.target.value);
    meetingDispatch({ type: "FILTER_OPTION", payload: event.target.value });
    console.log(meetingState);
  };

  return (
    <div className="dropdown-container">
      <select
        className="dropdown"
        value={meetingState.filter}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select event type
        </option>
        <option value="Online">Online</option>
        <option value="Offline">Offline</option>
        <option value="Both">Both</option>
      </select>
    </div>
  );
};

export default Dropdown;
