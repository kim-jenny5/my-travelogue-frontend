import { combineReducers } from "redux";
import userReducer from "./userReducer";
import tripReducer from "./tripReducer";
import modalReducer from "./modalReducer";
import placeReducer from "./placeReducer";

const rootReducer = combineReducers({
	user: userReducer,
	trips: tripReducer,
	modal: modalReducer,
	places: placeReducer
});

export default rootReducer;
