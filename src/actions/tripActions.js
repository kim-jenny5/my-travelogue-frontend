// export const createTrip = (trip_info, user_id) => {
export const createTrip = (trip_info) => {
	console.log(trip_info);
	// console.log(user_id);
	debugger;
	return (dispatch) => {
		dispatch({ type: "CREATING_TRIP", trip_info });
	};
};

// const logInUser = (user_info) => {
// 	// debugger;
// 	return (dispatch) => {
// 		// console.log(user_info);
// 		// debugger;
// 		dispatch({ type: "LOGIN_ATTEMPTING", user_info });
// 		fetch("http://localhost:3000/login", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 				Accept: "application/json",
// 				Authorization: localStorage.token
// 			},
// 			body: JSON.stringify(user_info)
// 		})
// 			.then((resp) => {
// 				// console.log(resp);
// 				// debugger;
// 				return resp.json();
// 			})
// 			.then((data) => {
// 				if (data.error) alert(data.error);
// 				dispatch({ type: "LOGIN_SUCCESS", data });
// 				// console.log(props);
// 			});
// 	};
// };
