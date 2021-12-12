export const fetchTrips = (userInfo) => {
	return (dispatch) => {
		// dispatch({ type: "FETCHING_TRIPS", user_info });
		// dispatch({ type: "FETCHING_TRIPS", user });
		fetch("http://localhost:3000/users")
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				const fetchedUser = data.filter((user) => user.id === userInfo.id);
				const [user] = fetchedUser;

				dispatch({ type: "TRIPS_FETCHED", user });
			});
	};
};

export const createTrip = (tripInfo) => {
	return (dispatch) => {
		// dispatch({ type: "CREATING_TRIP", tripInfo });
		fetch("http://localhost:3000/trips/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			},
			body: JSON.stringify({ trip: tripInfo })
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				// debugger;
				// console.log(data);
				if (data.error) alert(data.error);
				dispatch({ type: "TRIP_CREATED", data });
			});
	};
};
