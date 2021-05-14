import { combineReducers } from "redux";
import dateReducer from "./dateReducer";
import favoritesReducer from "./favoritesReducer";
import imagesReducer from "./imagesReducer";

export default combineReducers({ date: dateReducer, images: imagesReducer, favorites: favoritesReducer });
