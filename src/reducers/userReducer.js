const userReducer = (state = { user: null, isLoggedIn: false }, action) => {
	switch (action.type) {
		case "SIGNING_UP":
		case "LOGGING_IN":
			return {
				...state,
				user: action.userInfo
			};

		case "SIGNUP_SUCCESS":
		// return { user: action.data, isLoggedIn: true };
		case "LOGIN_SUCCESS":
			return { user: action.data, isLoggedIn: true };

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
