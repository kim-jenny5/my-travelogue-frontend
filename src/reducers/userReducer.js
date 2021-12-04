const userReducer = (
	state = { user: null, isLoggingIn: false, isLoggedIn: false },
	action
) => {
	switch (action.type) {
		case "USER_CREATING":
			return {
				...state,
				user: null,
				isLoggingIn: true,
				isLoggedIn: false
			};

		case "LOGIN_ATTEMPTING":
			return {
				...state,
				user: null,
				isLoggingIn: true,
				isLoggedIn: false
			};

		case "LOGIN_SUCCESS":
			localStorage.setItem("user", JSON.stringify(action.data.user));
			localStorage.setItem("token", action.data.jwt);

			return {
				...state,
				user: action.data.user,
				isLoggingIn: true,
				isLoggedIn: true
			};

		case "LOGGING_OUT":
			return;

		case "LOGGED_OUT":
			return;

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
