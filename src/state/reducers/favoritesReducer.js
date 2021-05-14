export default (state = {}, action) => {
  switch (action.type) {
    case "FAVORITES_FETCHED": {
      return { ...state, ...action.payload.favorites };
    }
    case "FAVORITES_UPDATED": {
      return { ...state, [action.payload.date]: action.payload.isFavorite };
    }
    default:
      return state;
  }
};
