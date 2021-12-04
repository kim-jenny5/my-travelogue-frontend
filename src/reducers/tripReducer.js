const tripReducer = (
	state = { user: null, trips: [], creatingTrip: null, createdTrip: null },
	action
) => {
	switch (action.type) {
		case "CREATING_TRIP":
			console.log(state);
			console.log(action);
			debugger;
			return {
				...state,
				user: action.trip_info.user_id,
				trips: [...action.trip_info],
				creatingTrip: true,
				createdTrip: false
			};

		default:
			return state;
	}
};

export default tripReducer;
