import React from "react";
import { NavLink } from "react-router-dom";

export const MainNav = (props) => {
	return (
		<div id="nav1">
			<p>my travelogue</p>
			<ul>
				<li>
					<NavLink to="/login">Log In</NavLink>
				</li>
				<li>
					<NavLink to="/signup">Sign Up</NavLink>
				</li>
			</ul>
		</div>
	);
};
