import React from "react";
import { NavLink } from "react-router-dom";

export const MainNav = () => {
	return (
		<div className="nav main-nav">
			<span className="main-title homepage">
				my <i>travelogue</i>
			</span>
			<span className="container">
				<NavLink to="/login" className="link user-btn login-btn">
					Log In
				</NavLink>
				<NavLink to="/signup" className="link user-btn signup-btn">
					Sign Up
				</NavLink>
			</span>
		</div>
	);
};
