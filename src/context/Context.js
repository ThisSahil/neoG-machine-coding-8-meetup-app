import React, { createContext, useContext, useEffect, useReducer } from "react";
import { fakedata } from "../fakeData/fakeapi";
import { meetingReducer } from "./Reducer";

const MeetingContext = createContext();

const Context = ({ children }) => {
  const [meetingState, meetingDispatch] = useReducer(meetingReducer, {
    meetings: [],
  });

  const fetchMeetings = () => {
    setTimeout(() => {
      meetingDispatch({ type: "FETCH_MEETINGS", payload: fakedata });
    }, 1000);
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  return (
    <MeetingContext.Provider value={{ meetingState, meetingDispatch }}>
      {children}
    </MeetingContext.Provider>
  );
};

export default Context;

export const MeetingState = () => {
  return useContext(MeetingContext);
};
