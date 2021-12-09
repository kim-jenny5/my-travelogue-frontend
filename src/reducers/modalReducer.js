const initialState = {
	modalProps: { open: false },
	modalType: null
};

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SHOW_MODAL":
			return {
				modalProps: action.modalProps,
				modalType: action.modalType
			};

		case "HIDE_MODAL":
			return initialState;

		default:
			return state;
	}
};

export default modalReducer;
