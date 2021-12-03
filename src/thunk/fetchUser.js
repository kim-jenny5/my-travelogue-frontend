export const fetchUsers = (user) => {
	// debugger;
	return (dispatch) => {
		// dispatch({ type: "START_LOGGING_IN_USERS" }, { payload: user });
		// dispatch({ type: "LOGIN_ATTEMPTING", user });
		dispatch({ type: "LOGIN_ATTEMPTING", user });
		// debugger;
		fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify(user)
		})
			.then((resp) => resp.json())
			.then((data) => {
				if (data.error) {
					alert(data.error);
				} else {
					localStorage.setItem("user", JSON.stringify(data.user));
					localStorage.setItem("token", data.jwt);
					// return dispatch({ type: "LOGIN_SUCCESS", data });
					dispatch({ type: "LOGIN_SUCCESS", data });
				}
				// console.log(user_json);
				// console.log(localStorage);
				// debugger;
			});
	};
};

// will need to change data retrieval on line 6
