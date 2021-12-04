const userReducer = (
	// state = { email: "", password: "", loading: false },
	// state = { email: "", password: "", logging_in: false, logged_in: false },
	state = { user: null, isLoggingIn: false, isLoggedIn: false },
	action
) => {
	switch (action.type) {
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

			// debugger;

			return {
				// email: action.user.email,
				// password: action.user.password,
				...state,
				user: action.data.user,
				isLoggingIn: true,
				isLoggedIn: true
			};

		case "LOGIN_FAIL":
			return {
				...state,
				user: action.data.user,
				isLoggingIn: false,
				isLoggedIn: false
			};

		default:
			return state;
	}
};

export default userReducer;
