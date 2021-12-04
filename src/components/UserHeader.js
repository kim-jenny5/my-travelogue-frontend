// this is where the button to log out will live

// export const UserHeader = () => {
// 	return (
// 		<div>
// 			<button onClick={logOut}>Log Out</button>
// 		</div>
// 	);
// };

import React, { Component } from "react";
import { connect } from "react-redux";
import { logOutUser } from "../actions/userActions";

class UserHeader extends Component {
	logOutUser = () => {
		// console.log("Button clicked!");
		this.props.logOutUser(this.props.user);
	};

	render() {
		return (
			<div>
				<button onClick={this.logOutUser}>Log Out</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ user: state.user.user });

const mapDispatchToProps = (dispatch) => {
	return { logOutUser: (user_info) => dispatch(logOutUser(user_info)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
