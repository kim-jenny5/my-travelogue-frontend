export const fetchTrips = (userInfo) => {
	return (dispatch) => {
		const { id } = userInfo;

		// dispatch({ type: "FETCHING_TRIPS", user_info });
		// dispatch({ type: "FETCHING_TRIPS", user });
		// fetch("http://localhost:3000/users")
		fetch(`http://localhost:3000/users/${id}`)
			.then((resp) => {
				// debugger;
				return resp.json();
			})
			.then((data) => {
				// debugger;
				// const fetchedUser = data.filter((user) => user.id === userInfo.id);
				// const [user] = fetchedUser;
				if (data.error) alert(data.error);
				// dispatch({ type: "TRIPS_FETCHED", data });
				dispatch({ type: "USER_TRIPS_FETCHED", data });
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

export const addPlace = (placeInfo) => {
	return (dispatch) => {
		// debugger;
		const { trip_id } = placeInfo;

		fetch(`http://localhost:3000/trips/${trip_id}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			},
			body: JSON.stringify({ place: placeInfo })
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				// console.log(data);
				if (data.error) alert(data.error);
				// dispatch({ type: "ADD_PLACE", data });
				dispatch({ type: "ADD_PLACE_TO_TRIP", data });
			});
	};
};
