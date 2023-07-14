export const meetingReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MEETINGS":
      return { ...state, meetings: action.payload };

    case "FILTER_OPTION":
      return { ...state, filter: action.payload };

    case "FILTER_SEARCH":
      return { ...state, search: action.payload };

    default:
      return state;
  }
};
