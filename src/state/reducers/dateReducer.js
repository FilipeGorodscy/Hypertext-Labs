import moment from "moment";

const today = moment();
const initialState = today.format("YYYY-MM-DD");

export default (state = initialState, action) => {
  switch (action.type) {
    case "DATE_CHANGED": {
      return action.payload.date;
    }
    default:
      return state;
  }
};
