const initialTripState = { tripName: null, startDate: null, endDate: null };

const tripReducer = (
	state = {
		// userId: null,
		// upcomingTrips: [],
		// pastTrips: [],
		// nextTrip: null,
		// fetchingTrip: false,
		userTripsFetched: false,
		fetchATrip: initialTripState,
		places: []
	},
	action
) => {
	switch (action.type) {
		case "USER_TRIPS_FETCHED":
			return {
				...state,
				userTripsFetched: true
				// userId: action.data.id
				// upcomingTrips: action.data.upcoming_trips,
				// pastTrips: action.data.past_trips,
				// nextTrip: action.data.next_trip
			};

		case "TRIP_CREATED":
			return {
				...state,
				newTripCreated: true
				// userId: action.data.user_id
				// upcomingTrips: [...state.upcomingTrips, action.data]
			};

		case "CLEAR_TRIP_CREATED":
			return { ...state, newTripCreated: false };

		case "FETCH_A_TRIP":
			const { id, trip_name, start_date, end_date } = action.data;

			return {
				...state,
				fetchATrip: {
					id,
					tripName: trip_name,
					startDate: start_date,
					endDate: end_date
				}
			};

		case "CLEAR_FETCHED_TRIP":
			return {
				...state,
				fetchATrip: initialTripState
			};

		case "ADD_PLACE_TO_TRIP":
			debugger;
			return { ...state };

		default:
			return state;
	}
};

export default tripReducer;
