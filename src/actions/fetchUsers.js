export const fetchUsers = (data) => {
	// debugger;
	return (dispatch) => {
		// dispatch({ type: "START_LOGGING_IN_USERS" }, { payload: data });
		dispatch({ type: "START_LOGGING_IN_USERS" });
		fetch("http://localhost:3000/users")
			.then((resp) => {
				debugger;
				return resp.json();
			})
			.then(() => dispatch({ type: "LOGIN_USER", data }));
	};
};

// will need to change data retrieval on line 6
