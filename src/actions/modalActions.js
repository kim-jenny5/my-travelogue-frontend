export const showModal = (modalInfo) => {
	return (dispatch) => {
		// debugger;
		dispatch({ type: "SHOW_MODAL", modalInfo });
	};
	// return { type: "SHOW_MODAL", modalInfo };
};

// export const newTripFormModal = () => {

// };

export const fetchTripModal = (modalInfo, tripInfo) => {
	return (dispatch) => {
		const { id } = tripInfo;

		fetch(`http://localhost:3000/trips/${id}`)
			.then((resp) => resp.json())
			.then((data) => {
				// debugger;
				dispatch({ type: "FETCH_A_TRIP", data });
			});

		dispatch({ type: "SHOW_MODAL", modalInfo });
		// showModal(modalInfo);
	};
};
