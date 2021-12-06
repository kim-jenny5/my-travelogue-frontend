import React from "react";
import { NavLink } from "react-router-dom";

export const SecondNav = () => {
	return (
		<div id="second-nav">
			<NavLink to="/" className="link">
				my travelogue
			</NavLink>
		</div>
	);
};
