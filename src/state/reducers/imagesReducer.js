export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PHOTO_SUCCEEDED": {
      return { ...state, [action.payload.date]: action.payload.data };
    }
    default:
      return state;
  }
};
