import React from "react";

export const UserFooter = (props) => {
	const name = props.user.first_name.toLowerCase();
	return (
		<div>
			<span>{name}'s travelogue </span>
		</div>
	);
};
