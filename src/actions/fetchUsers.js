export const fetchUsers = (data) => {
	debugger;
	return (dispatch) => {
		dispatch({ type: "START_LOGGING_IN_USERS" });
		fetch("http://localhost:3000/users")
			.then((resp) => resp.json())
			.then((users) => dispatch({ type: "LOGIN_USER", users }));
	};
};

// will need to change data retrieval on line 6
