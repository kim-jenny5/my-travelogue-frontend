import { combineReducers } from "redux";
import userReducer from "./userReducer";
import tripReducer from "./tripReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
	user: userReducer,
	trips: tripReducer,
	modal: modalReducer
});

export default rootReducer;
