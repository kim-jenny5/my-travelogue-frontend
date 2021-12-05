export const fetchTrips = (user_info) => {
	console.log(user_info);
	debugger;
	return (dispatch) => {
		dispatch({ type: "FETCHING_TRIPS" });
		fetch("http://localhost:3000/dashboard", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			}
		})
			.then((resp) => {
				debugger;
				return resp.json();
			})
			.then(() => dispatch({ type: "FETCHING_TRIPS" }));
	};
};

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
