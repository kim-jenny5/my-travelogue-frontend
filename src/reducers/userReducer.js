const userReducer = (state = { users: [], loading: false }, action) => {
	switch (action.type) {
		case "START_LOGGING_IN_USERS":
			return { ...state, users: [...state.users], loading: true };

		case "LOG_IN_USER":
			return {};
	}
};

export default userReducer;
