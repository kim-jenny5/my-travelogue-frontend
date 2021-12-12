const initialState = {
	isOpen: false,
	type: null
};

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SHOW_MODAL":
			return {
				isOpen: true,
				type: action.modalInfo.type
			};

		case "HIDE_MODAL":
			return initialState;

		default:
			return state;
	}
};

export default modalReducer;
