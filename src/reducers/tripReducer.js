const initialTripState = { tripName: null, startDate: null, endDate: null };

const tripReducer = (
	state = {
		userId: null,
		upcomingTrips: [],
		pastTrips: [],
		nextTrip: null,
		fetchedTrip: initialTripState,
		places: []
	},
	action
) => {
	switch (action.type) {
		case "TRIPS_FETCHED":
			return {
				...state,
				userId: action.user.id,
				upcomingTrips: action.user.upcoming_trips,
				pastTrips: action.user.past_trips,
				nextTrip: action.user.next_trip
			};

		case "TRIP_CREATED":
			return {
				...state,
				userId: action.data.user_id,
				upcomingTrips: [...state.upcomingTrips, action.data]
			};

		case "FETCH_A_TRIP":
			const { id, trip_name, start_date, end_date } = action.data;

			return {
				...state,
				fetchedTrip: {
					id,
					tripName: trip_name,
					startDate: start_date,
					endDate: end_date
				}
			};

		case "CLEAR_FETCHED_TRIP":
			return {
				...state,
				fetchedTrip: initialTripState
			};

		case "ADD_PLACE_TO_TRIP":
			debugger;
			return { ...state };

		default:
			return state;
	}
};

export default tripReducer;
