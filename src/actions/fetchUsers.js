export const fetchUsers = (data) => {
	// const configObj = {
	// 	method: "GET",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		Accept: "application/json"
	// 	},
	// 	body: JSON.stringify()
	// };

	// debugger;
	return (dispatch) => {
		// dispatch({ type: "START_LOGGING_IN_USERS" }, { payload: data });
		// dispatch({ type: "START_LOGGING_IN_USER" });
		fetch("http://localhost:3000/users")
			.then((resp) => {
				// debugger;
				return resp.json();
			})
			.then(() => {
				debugger;
				return dispatch({ type: "LOGIN_USER", data });
			});
	};
};

// will need to change data retrieval on line 6
