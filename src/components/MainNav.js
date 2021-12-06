import React from "react";
import { NavLink } from "react-router-dom";

export const MainNav = () => {
	return (
		<div id="main-nav">
			<div className="main-title">
				my <i>travelogue</i>
			</div>
			<NavLink to="/login" className="link btn-link login-btn">
				Log In
			</NavLink>
			<NavLink to="/signup" className="link btn-link signup-btn">
				Sign Up
			</NavLink>
		</div>
	);
};
