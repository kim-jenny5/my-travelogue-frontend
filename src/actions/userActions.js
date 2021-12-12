export const fetchCurrentUser = () => {
	return (dispatch) => {
		return fetch("http://localhost:3000/authorized", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			}
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				if (data.error) {
					localStorage.removeItem("token");
					localStorage.removeItem("user");
				} else {
					dispatch({ type: "LOGIN_SUCCESS", data });
					window.history.pushState(data.user, "", "/dashboard");
				}
			});
	};
};

export const logInUser = (userInfo) => {
	return (dispatch) => {
		dispatch({ type: "LOGGING_IN", userInfo });
		fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			},
			body: JSON.stringify({ session: userInfo })
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				if (data.error) {
					alert(data.error);
				} else {
					localStorage.setItem("user", JSON.stringify(data.user));
					localStorage.setItem("token", data.jwt);
					dispatch({ type: "LOGIN_SUCCESS", data });
					window.history.pushState(data.user, "", "/dashboard");
				}
			});
	};
};

export const createUser = (userInfo) => {
	return (dispatch) => {
		dispatch({ type: "SIGNING_UP", userInfo });
		fetch("http://localhost:3000/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			},
			body: JSON.stringify({ user: userInfo })
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				debugger;
				localStorage.setItem("user", JSON.stringify(data.user));
				localStorage.setItem("token", data.jwt);
				dispatch({ type: "SIGNUP_SUCCESS", data });
				window.history.pushState(data.user, "", "/dashboard");
			});
	};
};
