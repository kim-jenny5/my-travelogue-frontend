export const showModal = (modalInfo) => {
	// return (dispatch) => {
	// 	dispatch({ type: "SHOW_MODAL" });
	// };
	return { type: "SHOW_MODAL", modalInfo };
};

// export const hideModal = () => {
// 	return (dispatch) => {
// 		dispatch({ type: "SHOW_MODAL" });
// 	};
// };
