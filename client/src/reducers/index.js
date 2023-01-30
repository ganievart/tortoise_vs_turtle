import { combineReducers } from "redux";
import imageReducer from "./imageReducer";
import imageReducer from "./apiReducer";

const allReducers = combineReducers({
    imageReducer
});

export default allReducers;