const initialState = {
	// modalProps: { open: false },
	// modalType: { type: null }
	open: false,
	title: null
};

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SHOW_MODAL":
			// debugger;
			return {
				// modalProps: action.modalProps,
				// modalProps: { open: true },
				// modalType: { type: action.modalType.type }
				open: true,
				title: action.modalInfo.title
			};

		case "HIDE_MODAL":
			return initialState;

		default:
			return state;
	}
};

export default modalReducer;
