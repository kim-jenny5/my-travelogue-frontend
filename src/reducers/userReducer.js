const userReducer = (
	// state = { user: null, isLoggingIn: false, isLoggedIn: false },
	state = { user: null, isLoggedIn: false },
	action
) => {
	switch (action.type) {
		case "USER_CREATING":
			// localStorage.setItem("user", JSON.stringify(action.user_info.user));
			// localStorage.setItem("token", action.user_info.jwt);

			return {
				...state
				// user: null,
				// isLoggingIn: true
				// isLoggedIn: false
			};

		// case "LOGIN_ATTEMPTING":
		// 	debugger;
		// 	localStorage.setItem("user", JSON.stringify(action.data.user));
		// 	localStorage.setItem("token", action.data.jwt);

		// 	return {
		// 		...state,
		// 		// user: null,
		// 		isLoggingIn: true
		// 		// isLoggedIn: false
		// 	};

		case "LOGIN_SUCCESS":
			// localStorage.setItem("user", JSON.stringify(action.data.user));
			// localStorage.setItem("token", action.data.jwt);
			// debugger;

			return {
				// ...state,
				user: action.data,
				// isLoggingIn: true,
				isLoggedIn: true
			};

		// case "LOGGING_OUT":
		// 	console.log(localStorage);
		// 	localStorage.removeItem("token");
		// 	localStorage.removeItem("user");
		// 	return {
		// 		...state,
		// 		user: null,
		// 		isLoggingIn: false
		// 		// isLoggedIn: true
		// 	};

		case "LOGGED_OUT":
			// debugger;
			return { ...state, user: null, isLoggedIn: false };

		// case "LOGIN_FAIL":
		// 	return {
		// 		...state,
		// 		user: action.data.user,
		// 		isLoggingIn: false,
		// 		isLoggedIn: false
		// 	};

		default:
			return state;
	}
};

export default userReducer;
