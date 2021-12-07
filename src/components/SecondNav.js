import React from "react";
import { NavLink } from "react-router-dom";

export const SecondNav = () => {
	return (
		<div className="nav second-nav">
			<div className="main-title link">
				<NavLink to="/">
					{/* <div> */}
					my <span className="emphasis">travelogue</span>
					{/* </div> */}
				</NavLink>
			</div>
		</div>
	);
};
