import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <select
        className="dropdown"
        value={selectedOption}
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
