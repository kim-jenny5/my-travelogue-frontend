const userReducer = (
	// state = { email: "", password: "", loading: false },
	// state = { email: "", password: "", logging_in: false, logged_in: false },
	state = { user: null, logging_in: false, logged_in: false },
	action
) => {
	switch (action.type) {
		// case "START_LOGGING_IN_USER":
		// 	console.log({ ...state, loading: true });
		// 	return { ...state, loading: true };

		case "LOGIN_ATTEMPTING":
			// console.log(state);
			// console.log(action);
			// debugger;
			return {
				...state,
				user: null,
				logging_in: true,
				logged_in: false
			};

		case "LOGIN_SUCCESS":
			localStorage.setItem("user", JSON.stringify(action.data.user));
			localStorage.setItem("token", action.data.jwt);

			debugger;

			return {
				// email: action.user.email,
				// password: action.user.password,
				...state,
				user: action.data.user,
				logging_in: true,
				logged_in: true
			};

		case "LOGIN_FAIL":
			return {
				...state,
				user: action.data.user,
				logging_in: false,
				logged_in: false
			};

		default:
			return state;
	}
};

export default userReducer;
