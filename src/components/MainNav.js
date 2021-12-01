import React from "react";
import { NavLink } from "react-router-dom";

export const MainNav = (props) => {
	return (
		<div id="nav1">
			<p>my travelogue</p>
			<ul>
				<li>
					<NavLink to="/login" exact>
						Log In
					</NavLink>
				</li>
				<li>
					<NavLink to="/signup" exact>
						Sign Up
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

// export default class MainNav extends Component {
// 	render() {
// 		return (
// 			<div id="nav1">
// 				<p>my travelogue</p>
// 				<ul>
// 					<li>
// 						<NavLink to="/login" exact>
// 							Log In
// 						</NavLink>
// 					</li>
// 					<li>
// 						<NavLink to="/signup" exact>
// 							Sign Up
// 						</NavLink>
// 					</li>
// 				</ul>
// 			</div>
// 		);
// 	}
// }
