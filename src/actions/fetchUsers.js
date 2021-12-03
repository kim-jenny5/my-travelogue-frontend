export const fetchUsers = (data) => {
	// const configObj = {
	// method: "POST",
	// headers: {
	// 	"Content-Type": "application/json",
	// 	Accept: "application/json"
	// },
	// body: JSON.stringify()
	// };

	const { email, password } = data;
	console.log(email, password);
	// debugger;
	return (dispatch) => {
		// dispatch({ type: "START_LOGGING_IN_USERS" }, { payload: data });
		dispatch({ type: "LOGIN_ATTEMPTING" });
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
