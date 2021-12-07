import React from "react";
import { NavLink } from "react-router-dom";

export const SecondNav = () => {
	return (
		<div className="nav second-nav">
			<NavLink to="/" className="main-title link">
				my <i>travelogue</i>
			</NavLink>
		</div>
	);
};
