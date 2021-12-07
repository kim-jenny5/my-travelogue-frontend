import React from "react";
import { NavLink } from "react-router-dom";

export const SecondNav = () => {
	return (
		<div className="nav second-nav">
			<NavLink to="/" className="main-title link">
				{/* <div> */}
				my <span className="emphasis">travelogue</span>
				{/* </div> */}
			</NavLink>
		</div>
	);
};
