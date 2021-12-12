export const fetchTrips = (userInfo) => {
	return (dispatch) => {
		const { id } = userInfo;

		fetch(`http://localhost:3000/users/${id}`)
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				if (data.error) alert(data.error);
				dispatch({ type: "USER_TRIPS_FETCHED", data });
			});
	};
};

export const createTrip = (tripInfo) => {
	return (dispatch) => {
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
				if (data.error) alert(data.error);
				dispatch({ type: "TRIP_CREATED", data });
			});
	};
};

export const addPlace = (placeInfo) => {
	return (dispatch) => {
		fetch("http://localhost:3000/places/new", {
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
				if (data.error) {
					const key = Object.keys(data.error);
					const errorMsg = data.error[key][0];
					alert(errorMsg);
				} else {
					dispatch({ type: "ADD_PLACE_TO_TRIP", data });
				}
			});
	};
};
