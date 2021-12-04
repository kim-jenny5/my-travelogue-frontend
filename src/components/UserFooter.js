import React from "react";

export const UserFooter = (props) => {
	const name = props.user.first_name.toLowerCase();
	// console.log(props);
	// debugger;
	return (
		<div>
			{/* <span>{this.props.user} travelogue </span> */}
			<span>{name}'s travelogue </span>
		</div>
	);
};
