export const fetchCurrentUser = () => {
	return (dispatch) => {
		let token = localStorage.token;

		if (token) {
			return fetch("http://localhost:3000/authorized", {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: localStorage.token
				}
			})
				.then((resp) => resp.json())
				.then((data) => {
					console.log(data);
					if (data.error) alert(data.error);
					// dispatch();
					// debugger;
				});
		}
	};
};
