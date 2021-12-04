const tripReducer = (state = { trips: [] }, action) => {
	switch (action.type) {
		case "CREATING_TRIP":
			return { ...state };

		default:
			return state;
	}
};

export default tripReducer;
