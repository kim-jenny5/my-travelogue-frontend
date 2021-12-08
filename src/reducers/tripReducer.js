import { isBefore } from "date-fns";
import { nanoid } from "nanoid";

const tripReducer = (
	state = {
		id: null,
		user_id: null,
		trips: { upcomingTrips: [], pastTrips: [] },
		// trips: [],
		fetchingTrip: null,
		creatingTrip: null,
		createdTrip: null
	},
	action
) => {
	switch (action.type) {
		case "FETCHING_TRIPS":
			debugger;
			// return { ...state, user_id: action.user_info.id, fetchingTrip: true };
			return { ...state, user_id: action.user.id, fetchingTrip: true };

		case "TRIPS_FETCHED":
			debugger;
			let { upcomingTrips, pastTrips } = state.trips;

			// NOTE: MOVE THIS LOGIC TO USER MODEL

			// for (const trip of action.usersTrips) {
			// 	const dateFormatted = new Date(trip.start_date);
			// 	const isBeforeAns = isBefore(new Date(), dateFormatted);
			// 	isBeforeAns
			// 		? (upcomingTrips = [...upcomingTrips, trip])
			// 		: (pastTrips = [...pastTrips, trip]);
			// 	//you're mutating state
			// }

			// // put this kind of logic in the backend

			return { ...state, trips: { upcomingTrips, pastTrips } };

		case "CREATING_TRIP":
			return {
				...state,
				// id: nanoid(),
				user_id: action.trip_info.user_id,
				// trips: [...state.trips, action.trip_info],
				trips: {
					...state.trips,
					upcomingTrips: [...state.trips.upcomingTrips, action.trip_info]
				},
				creatingTrip: true,
				createdTrip: false
			};

		case "TRIP_CREATION_SUCCESS":
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
