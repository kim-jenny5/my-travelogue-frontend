import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainNav = () => {
	return (
		<div id="main-nav">
			<p>my travelogue</p>
			<NavLink to="/login">Log In</NavLink>
			<NavLink to="/signup">Sign Up</NavLink>
		</div>
	);
};
