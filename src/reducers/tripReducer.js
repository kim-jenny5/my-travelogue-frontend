const tripReducer = (
	state = { user_id: null, trips: [], creatingTrip: null, createdTrip: null },
	action
) => {
	switch (action.type) {
		case "FETCHING_TRIPS":
			return;

		case "CREATING_TRIP":
			// console.log(state);
			// console.log(action);
			// debugger;
			return {
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
