const tripReducer = (
	state = {
		userTripsFetched: false,
		newTripCreated: false,
		newPlaceAdded: false,
		showFetchedTrip: null
	},
	action
) => {
	switch (action.type) {
		case "USER_TRIPS_FETCHED":
			return { ...state, userTripsFetched: true };

		case "TRIP_CREATED":
			return { ...state, newTripCreated: true };

		case "CLEAR_TRIP_CREATED_STATUS":
			return { ...state, newTripCreated: false };

		case "FETCH_A_TRIP":
			return { ...state, showFetchedTrip: action.data };

		case "CLEAR_FETCHED_TRIP":
			return { ...state, showFetchedTrip: null };

		case "ADD_PLACE_TO_TRIP":
			return { ...state, newPlaceAdded: true };

		case "CLEAR_PLACE_ADDED_STATUS":
			return { ...state, newPlaceAdded: false };

		default:
			return state;
	}
};

export default tripReducer;
