const userReducer = (
	// state = { email: "", password: "", loading: false },
	state = { email: "", password: "", logging_in: false, logged_in: false },
	action
) => {
	// console.log(action);

	// const { email, password, logging_in, logged_in } = state;
	// console.log(email, password, logging_in, logged_in);

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
				email: state.email,
				password: state.password,
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
