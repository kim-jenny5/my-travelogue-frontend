import React from "react";

export const UserFooter = (props) => {
	const name = props.first_name.toLowerCase();
	return (
		<div className="footer user">
			<div className="container">
				<span className="name">
					{name}'s <i>travelogue</i>
				</span>
			</div>
		</div>
	);
};
