// this is where the button to log out will live

// export const UserHeader = () => {
// 	return (
// 		<div>
// 			<button onClick={logOut}>Log Out</button>
// 		</div>
// 	);
// };

import React, { Component } from "react";

export default class UserHeader extends Component {
	logOut = () => {
		console.log("Button clicked!");
	};

	render() {
		return (
			<div>
				<button onClick={this.logOut}>Log Out</button>
			</div>
		);
	}
}
