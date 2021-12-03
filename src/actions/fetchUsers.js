export const fetchUsers = (user) => {
	// const configObj = {
	// method: "POST",
	// headers: {
	// 	"Content-Type": "application/json",
	// 	Accept: "application/json"
	// },
	// body: JSON.stringify()
	// };

	const { email, password } = user;
	console.log(email, password);
	// debugger;
	return (dispatch) => {
		// dispatch({ type: "START_LOGGING_IN_USERS" }, { payload: user });
		// dispatch({ type: "LOGIN_ATTEMPTING", user });
		dispatch({ type: "LOGIN_ATTEMPTING", email, password });
		fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify(email, password)
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
