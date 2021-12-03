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
			.then((resp) => {
				debugger;
				return resp.json();
			})
			.then(() => {
				debugger;
				return dispatch({ type: "LOGIN_USER" });
			});
	};
};

// will need to change data retrieval on line 6
