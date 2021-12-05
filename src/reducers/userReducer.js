const userReducer = (
	state = { user: null, isLoggingIn: false, isLoggedIn: false },
	action
) => {
	switch (action.type) {
		case "USER_CREATING":
			// debugger;
			// localStorage.setItem("user", JSON.stringify(action.user_info.user));
			// localStorage.setItem("token", action.user_info.jwt);

			return {
				...state,
				// user: null,
				isLoggingIn: true
				// isLoggedIn: false
			};

		case "LOGIN_ATTEMPTING":
			return {
				...state,
				// user: null,
				isLoggingIn: true
				// isLoggedIn: false
			};

		case "LOGIN_SUCCESS":
			localStorage.setItem("user", JSON.stringify(action.data.user));
			localStorage.setItem("token", action.data.jwt);

			return {
				...state,
				user: action.data.user,
				// isLoggingIn: true,
				isLoggedIn: true
			};

		case "LOGGING_OUT":
			console.log(localStorage);
			localStorage.removeItem("token");
			localStorage.removeItem("user");
			return {
				...state,
				user: null,
				isLoggingIn: false
				// isLoggedIn: true
			};

		case "LOGGED_OUT":
			// debugger;
			return { ...state, isLoggedIn: false };

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
