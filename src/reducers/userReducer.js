const userReducer = (
	state = { email: "", password: "", loading: false },
	action
) => {
	console.log(action);
	debugger;
	switch (action.type) {
		case "START_LOGGING_IN_USERS":
			console.log({ ...state, loading: true });
			return { ...state, loading: true };

		case "LOG_IN_USER":
			return {};

		default:
			return state;
	}
};

export default userReducer;
