// import { Redirect } from "react-router-dom";

export const fetchCurrentUser = () => {
	return () => {
		let token = localStorage.token;
		if (token) {
			return fetch("http://localhost:3000/authorized", {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: localStorage.token
				}
			})
				.then((resp) => resp.json())
				.then((data) => {
					console.log(data);
					if (data.error) alert(data.error);
					// dispatch();
					// debugger;
				});
		}
	};
};

export const logInUser = (user_info) => {
	// debugger;
	return (dispatch) => {
		// console.log(user_info);
		// debugger;
		dispatch({ type: "LOGIN_ATTEMPTING", user_info });
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
				if (data.error) alert(data.error);
				dispatch({ type: "LOGIN_SUCCESS", data });
				// console.log(props);
			});
	};
};

export const signUpUser = (user_info) => {};
