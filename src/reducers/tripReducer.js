const tripReducer = (
	state = {
		user_id: null,
		// trips: { upcomingTrips: [], pastTrips: [] },
		trips: [],
		fetchingTrip: null,
		creatingTrip: null,
		createdTrip: null
	},
	action
) => {
	switch (action.type) {
		case "FETCHING_TRIPS":
			// console.log(state);
			// console.log(action);
			// debugger;
			return { ...state, user_id: action.user_info.id, fetchingTrip: true };

		case "TRIPS_FETCHED":
			console.log(state);
			console.log(action);
			// debugger;
			return { ...state, trips: [...action.usersTrips] };

		case "CREATING_TRIP":
			// console.log(state);
			// console.log(action);
			// debugger;
			return {
				...state,
				user_id: action.trip_info.user_id,
				trips: [...state.trips, action.trip_info],
				creatingTrip: true,
				createdTrip: false
			};

		case "TRIP_CREATION_SUCCESS":
			// console.log(state);
			// console.log(action);
			// return state;
			// debugger;
			return {
				...state,
				// user_id: action.data.user_id,
				// trips: [...state.trips, action.data],
				// creatingTrip: true,
				createdTrip: true
			};

		// case "TRIP_CREATION_FAIL":
		// 	return {
		// 		...state,
		// 		user_id: action.trip_info.user_id,
		// 		trips: [...state.trips],
		// 		creatingTrip: false,
		// 		createdTrip: false
		// 	};

		default:
			return state;
	}
};

export default tripReducer;
