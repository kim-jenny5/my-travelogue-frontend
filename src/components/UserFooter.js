import React from "react";

export const UserFooter = (props) => {
	// debugger;
	const name = props.first_name.toLowerCase();
	return (
		<div className="footer user">
			<div className="container">
				<span>{name}'s travelogue </span>
			</div>
		</div>
	);
};
