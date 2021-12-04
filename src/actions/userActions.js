// export const fetchCurrentUser = () => {
// 	return (dispatch) => {
// 		let token = localStorage.token;
// 		if (token) {
// 			return fetch("http://localhost:3000/authorized", {
// 				headers: {
// 					"Content-Type": "application/json",
// 					Accept: "application/json",
// 					Authorization: localStorage.token
// 				}
// 			})
// 				.then((resp) => resp.json())
// 				.then((data) => {
// 					console.log(data);
// 					if (data.error) {
// 						alert(data.error);
// 						localStorage.removeItem("token");
// 					} else {
// 						dispatch({ type: "LOGIN_SUCCESS", data });
// 					}
// 				});
// 		}
// 	};
// };

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
			.then();
	};
};
