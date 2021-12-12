// export const addPlace = (placeInfo) => {
// 	debugger;
// 	return (dispatch) => {
// 		dispatch({ type: "ADD_PLACE" }, placeInfo);
// 	};
// };

export const addPlace = (placeInfo) => {
	return (dispatch) => {
		// debugger;
		const { trip_id } = placeInfo;

		fetch(`http://localhost:3000/trips/${trip_id}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			},
			body: JSON.stringify({ place: placeInfo })
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				debugger;
				// console.log(data);
				if (data.error) alert(data.error);
				dispatch({ type: "TRIP_CREATED", data });
			});
	};
};
