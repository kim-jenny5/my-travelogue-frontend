export const fetchTrips = (userInfo) => {
	// const user = JSON.parse(user_info);
	return (dispatch) => {
		// dispatch({ type: "FETCHING_TRIPS", user_info });
		// dispatch({ type: "FETCHING_TRIPS", user });
		// fetch("http://localhost:3000/dashboard")
		fetch("http://localhost:3000/users")
			.then((resp) => {
				// console.log(resp);
				// debugger;
				return resp.json();
			})
			.then((data) => {
				const fetchedUser = data.filter((user) => user.id === userInfo.id);
				// const user = data.filter((user) => user.id === user_info.id);
				const [user] = fetchedUser;
				// console.log(user);

				// debugger;

				// console.log(data);
				// const usersTrips = data.filter((trip) => trip.user_id === user_info.id);
				// const upcomingTrips = data[0].upcoming_trips;
				// const pastTrips = data[0].past_trips
				// const usersTrips = data.filter((trip) => trip.user_id === user.id);
				// upcomingOrPastTrip(usersTrips);
				dispatch({
					type: "TRIPS_FETCHED",
					// user: user,
					user
					// trips: {
					// 	upcomingTrips: user.upcoming_trips,
					// 	pastTrips: user.past_trips
					// }
					// trips: [user.upcoming_trips, user.past_trips]
				});
			});
		// .then((trips) => dispatch({ type: "TRIPS_FETCHED", trips }));
	};
};

export const createTrip = (tripInfo) => {
	// debugger;
	return (dispatch) => {
		// dispatch({ type: "CREATING_TRIP", tripInfo });
		fetch("http://localhost:3000/newtrip", {
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

export const fetchATrip = (tripInfo) => {
	return (dispatch) => {};
};
