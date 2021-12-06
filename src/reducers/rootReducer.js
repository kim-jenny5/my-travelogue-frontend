import { combineReducers } from "redux";
import userReducer from "./userReducer";
import tripReducer from "./tripReducer";
import mapReducer from "./mapReducer";

const rootReducer = combineReducers({
	user: userReducer,
	trips: tripReducer,
	map: mapReducer
});

export default rootReducer;
