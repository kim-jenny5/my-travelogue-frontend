export const fetchCurrentUser = () => {
	return (dispatch) => {
		// if (token) {
		return fetch("http://localhost:3000/authorized", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			}
		})
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
				if (data.error) {
					alert(data.error);
					localStorage.removeItem("token");
				} else {
					dispatch({ type: "LOGIN_SUCCESS", data });
				}
			});
		// }
	};
};

export const logInUser = (user_info) => {
	return (dispatch) => {
		// dispatch({ type: "LOGIN_ATTEMPTING", user_info });
		fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			},
			body: JSON.stringify(user_info)
		})
			.then((resp) => {
				// console.log(resp);
				// debugger;
				return resp.json();
			})
			.then((data) => {
				// debugger;
				if (data.error) alert(data.error);
				// localStorage.setItem("user", JSON.stringify(data.user));
				// localStorage.setItem("token", data.jwt);
				dispatch({ type: "LOGIN_SUCCESS", data });
				// redirect the user here possibly
				// console.log(props);
			});
	};
};

export const createUser = (user_info) => {
	return (dispatch) => {
		dispatch({ type: "USER_CREATING", user_info });
		fetch("http://localhost:3000/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			},
			body: JSON.stringify(user_info)
		})
			.then((resp) => {
				debugger;
				return resp.json();
			})
			.then((data) => console.log(data));
	};
};

export const logOutUser = (user_info) => {
	// console.log(user_info);
	return (dispatch) => {
		// dispatch({ type: "LOGGING_OUT", user_info });
		dispatch({ type: "LOGGED_OUT", user_info });
	};
};
