const modalReducer = (state = { type: null, open: false }, action) => {
	switch (action.type) {
		case "SHOW_MODAL":
			return;

		case "HIDE_MODAL":
			return;

		default:
			return state;
	}
};

export default modalReducer;
