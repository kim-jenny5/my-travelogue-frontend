import React, { Component } from "react";
import { connect } from "react-redux";
import { logOutUser } from "../actions/userActions";

class UserHeader extends Component {
	logOutUser = () => {
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
