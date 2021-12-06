import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const UserBtns = styled.button`
	width: 53px;
	font-size: 18px;
	color: black;
	background-color: ${(props) =>
		props.type === "login" ? "transparent" : "#E0E0E0"};
`;

export const MainNav = () => {
	return (
		<div id="main-nav">
			<p>my travelogue</p>
			{/* <ul>
				<li> */}
			<UserBtns type="login">
				<NavLink to="/login">Log In</NavLink>
			</UserBtns>
			{/* </li>
				<li> */}
			<UserBtns type="signup">
				<NavLink to="/signup">Sign Up</NavLink>
			</UserBtns>
			{/* </li>
			</ul> */}
		</div>
	);
};
