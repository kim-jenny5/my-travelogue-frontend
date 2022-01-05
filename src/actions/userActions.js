export const fetchCurrentUser = () => {
	return (dispatch) => {
		// return fetch("http://localhost:3000/authorized", {
		return fetch("https://my-travelogue.herokuapp.com/authorized", {
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
		// fetch("http://localhost:3000/login", {
		fetch("https://my-travelogue.herokuapp.com/login", {
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
		// fetch("http://localhost:3000/signup", {
		fetch("https://my-travelogue.herokuapp.com/signup", {
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
				if (data.error) {
					const key = Object.keys(data.error);
					const errorMsg = data.error[key][0];
					alert(errorMsg);
				} else {
					localStorage.setItem("user", JSON.stringify(data.user));
					localStorage.setItem("token", data.jwt);
					dispatch({ type: "SIGNUP_SUCCESS", data });
					window.history.pushState(data.user, "", "/dashboard");
					dispatch({ type: "REFRESH_DASHBOARD", data });
				}
			});
	};
};

export const refreshDashboard = (userInfo) => {
	return (dispatch) => {
		const { id } = userInfo;

		// fetch(`http://localhost:3000/users/${id}`)
		fetch(`https://my-travelogue.herokuapp.com/users/${id}`)
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				if (data.error) {
					alert(data.error);
				} else {
					dispatch({ type: "REFRESH_DASHBOARD", data });
				}
			});
	};
};
