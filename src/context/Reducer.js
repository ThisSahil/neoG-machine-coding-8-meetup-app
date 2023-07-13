export const meetingReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MEETINGS":
      return { ...state, meetings: action.payload };

    default:
      return state;
  }
};
