const initialState = {
	// modalProps: { open: false },
	// modalType: { type: null }
	isOpen: false,
	type: null
	// title: null
};

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SHOW_MODAL":
			debugger;
			return {
				// modalProps: action.modalProps,
				// modalProps: { isOpen: true },
				// modalType: { type: action.modalType.type }
				isOpen: true,
				type: action.modalInfo.type
				// title: action.modalInfo.title
			};

		case "HIDE_MODAL":
			return initialState;

		default:
			return state;
	}
};

export default modalReducer;
