import { combineReducers } from "redux";
import userReducer from "./userReducer";
import tripReducer from "./tripReducer";

const rootReducer = combineReducers({
	user: userReducer
	// trips: tripReducer
});

export default rootReducer;
