const userReducer = (
	// state = { email: "", password: "", loading: false },
	state = { email: "", password: "", logging_in: false, logged_in: false },
	action
) => {
	console.log(action);

	debugger;
	switch (action.type) {
		// case "START_LOGGING_IN_USER":
		// 	console.log({ ...state, loading: true });
		// 	return { ...state, loading: true };

		case "LOGIN_ATTEMPTING":
			return {
				email: action.data.email,
				password: action.data.password,
				logging_in: true,
				logged_in: false
			};

		case "LOGIN_SUCCESS":
			return {
				email: action.data.email,
				password: action.data.password,
				logging_in: true,
				logged_in: true
			};

		case "LOGIN_FAIL":
			return {
				email: action.data.email,
				password: action.data.password,
				logging_in: false,
				logged_in: false
			};

		// case "LOG_IN_USER":
		// 	// console.log(...state, action.data.email, action.data.password, loading);
		// 	return {
		// 		...state,
		// 		email: action.data.email,
		// 		password: action.data.password,
		// 		loading: false
		// 	};

		default:
			return state;
	}
};

export default userReducer;
