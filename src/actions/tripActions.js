export const fetchTrips = (user_info) => {
	// const user = JSON.parse(user_info);
	return (dispatch) => {
		dispatch({ type: "FETCHING_TRIPS", user_info });
		// dispatch({ type: "FETCHING_TRIPS", user });
		// fetch("http://localhost:3000/dashboard")
		fetch("http://localhost:3000/users")
			.then((resp) => {
				// console.log(resp);
				// debugger;
				return resp.json();
			})
			.then((data) => {
				debugger;
				// console.log(data);
				const usersTrips = data.filter((trip) => trip.user_id === user_info.id);
				// const usersTrips = data.filter((trip) => trip.user_id === user.id);
				// upcomingOrPastTrip(usersTrips);
				dispatch({ type: "TRIPS_FETCHED", usersTrips });
			});
		// .then((trips) => dispatch({ type: "TRIPS_FETCHED", trips }));
	};
};

export const createTrip = (trip_info) => {
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
