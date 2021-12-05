export const fetchTrips = (user_info) => {
	// console.log(user_info);
	// debugger;
	return (dispatch) => {
		dispatch({ type: "FETCHING_TRIPS", user_info });
		fetch("http://localhost:3000/dashboard")
			.then((resp) => {
				console.log(resp);
				// debugger;
				return resp.json();
			})
			.then((data) => {
				// debugger;
				// console.log(data);
				const usersTrips = data.filter((trip) => trip.user_id === user_info.id);
				// upcomingOrPastTrip(usersTrips);
				dispatch({ type: "TRIPS_FETCHED", usersTrips });
			});
		// .then((trips) => dispatch({ type: "TRIPS_FETCHED", trips }));
	};
};

// const upcomingOrPastTrip = (trips) => {
// 	for (const trip of trips) {
// 		const dateFormatted = new Date(trip.start_date);
// 		const isBeforeAns = isBefore(new Date(), dateFormatted);
// 		if (isBeforeAns) {
// 			// [...upcomingTrips, trip];
// 			upcomingTrips = [...upcomingTrips, trip];
// 			// trips = upcomingTrips.push(trip);
// 		} else {
// 			// trips = pastTrips.push(trip);
// 			pastTrips = [...pastTrips, trip];
// 		}
// 	}
// 	debugger;
// };

export const createTrip = (trip_info) => {
	// console.log(trip_info);
	// console.log(user_id);
	// debugger;
	return (dispatch) => {
		dispatch({ type: "CREATING_TRIP", trip_info });
		fetch("http://localhost:3000/newtrip", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			},
			body: JSON.stringify(trip_info)
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				// console.log(data);
				if (data.error) alert(data.error);
				dispatch({ type: "TRIP_CREATION_SUCCESS", data });
			});
	};
};
