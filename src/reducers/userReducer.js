const userReducer = (
	// state = { email: "", password: "", loading: false },
	state = { email: "", password: "", logging_in: false, logged_in: false },
	action
) => {
	const { email, password } = action;
	console.log(email, password);

	// debugger;
	switch (action.type) {
		// case "START_LOGGING_IN_USER":
		// 	console.log({ ...state, loading: true });
		// 	return { ...state, loading: true };

		case "LOGIN_ATTEMPTING":
			console.log(state);
			console.log(action);
			debugger;
			return {
				email,
				password,
				logging_in: true,
				logged_in: false
			};

		// case "LOGIN_SUCCESS":
		// 	return {
		// 		email: state.email,
		// 		password: action.data.password,
		// 		logging_in: true,
		// 		logged_in: true
		// 	};

		// case "LOGIN_FAIL":
		// 	return {
		// 		email: action.data.email,
		// 		password: action.data.password,
		// 		logging_in: false,
		// 		logged_in: false
		// 	};

		default:
			return state;
	}
};

export default userReducer;
