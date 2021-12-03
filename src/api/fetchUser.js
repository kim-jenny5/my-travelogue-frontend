export const fetchUsers = (login_info) => {
	// debugger;
	return (dispatch) => {
		// dispatch({ type: "START_LOGGING_IN_USERS" }, { payload: user });
		// dispatch({ type: "LOGIN_ATTEMPTING", user });
		dispatch({ type: "LOGIN_ATTEMPTING", login_info });
		// debugger;
		fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			},
			body: JSON.stringify(login_info)
		})
			.then((resp) => resp.json())
			.then((data) => {
				// debugger;
				if (data.error) {
					alert(data.error);
				} else {
					localStorage.setItem("user", JSON.stringify(data.user));
					localStorage.setItem("token", data.jwt);
					debugger;
					// return dispatch({ type: "LOGIN_SUCCESS", data });
					// dispatch({ type: "LOGIN_SUCCESS", data });
					dispatch({ type: "LOGIN_SUCCESS", data });
				}
				// console.log(user_json);
				// console.log(localStorage);
				// debugger;
			});
	};
};

export const currentUser = () => {
	// debugger;
	return fetch("http://localhost:3000/authorized", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			token: localStorage.token
		}
	})
		.then((resp) => {
			// debugger;
			resp.json();
		})
		.then((data) => {
			console.log(data);
			debugger;
		});
};

// will need to change data retrieval on line 6
