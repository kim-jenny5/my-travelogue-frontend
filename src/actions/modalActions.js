export const showModal = () => {
	return (dispatch) => {
		dispatch({ type: "SHOW_MODAL" });
	};
};

// export const hideModal = () => {
// 	return (dispatch) => {
// 		dispatch({ type: "SHOW_MODAL" });
// 	};
// };
