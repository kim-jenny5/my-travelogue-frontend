const userReducer = (state = { user: null, isLoggedIn: false }, action) => {
	switch (action.type) {
		case "SIGNING_UP":
		case "LOGGING_IN":
			return {
				...state,
				user: action.userInfo
			};

		case "SIGNUP_SUCCESS":
		case "LOGIN_SUCCESS":
			return { user: action.data, isLoggedIn: true };

		case "LOGGED_OUT":
			return { ...state, user: null, isLoggedIn: false };

		case "REFRESH_DASHBOARD":
			const user = action.data.user || action.data;
			return { ...state, user };

		default:
			return state;
	}
};

export default userReducer;
