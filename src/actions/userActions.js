export const fetchCurrentUser = () => {
	// debugger;
	return (dispatch) => {
		// if (token) {
		// dispatch({ type: "LOGIN_ATTEMPTING", user_info });

		return fetch("http://localhost:3000/authorized", {
			// method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			}
		})
			.then((resp) => {
				// debugger;
				return resp.json();
			})
			.then((data) => {
				// console.log(data);
				if (data.error) {
					// alert(data.error);
					localStorage.removeItem("token");
				} else {
					// debugger;
					// localStorage.setItem("user", JSON.stringify(action.data.user));
					// localStorage.setItem("token", action.data.jwt);
					// debugger;
					dispatch({ type: "LOGIN_SUCCESS", data });
					window.history.pushState(data.user, "", "/dashboard");
				}
			});
		// }
	};
};

export const logInUser = (userInfo) => {
	return (dispatch) => {
		// dispatch({ type: "LOGIN_ATTEMPTING", user_info });
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
				// console.log(resp);
				// debugger;
				return resp.json();
			})
			.then((data) => {
				// debugger;
				if (data.error) {
					alert(data.error);
				} else {
					// debugger;
					localStorage.setItem("user", JSON.stringify(data.user));
					localStorage.setItem("token", data.jwt);
					dispatch({ type: "LOGIN_SUCCESS", data });
					window.history.pushState(data.user, "", "/dashboard");
				}
				// localStorage.setItem("user", JSON.stringify(data.user));
				// localStorage.setItem("token", data.jwt);
				// redirect the user here possibly
				// console.log(props);
			});
		// .then(window.history.pushState(user_info, "", "dashboard"));
	};
};

export const createUser = (userInfo) => {
	return (dispatch) => {
		// debugger;
		// dispatch({ type: "USER_CREATING", userInfo });
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
				// debugger;
				return resp.json();
			})
			.then((data) => {
				localStorage.setItem("user", JSON.stringify(data.user));
				localStorage.setItem("token", data.jwt);
				dispatch({ type: "LOGIN_SUCCESS", data });
				window.history.pushState(data.user, "", "/dashboard");
			});
	};
};
