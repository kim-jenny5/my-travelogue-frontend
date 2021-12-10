// import React, { Component } from "react";
// import { connect } from "react-redux";
// // import { logOutUser } from "../actions/userActions";

// class UserHeader extends Component {
// 	logOutUser = () => {
// 		// debugger;
// 		this.props.logOutUser();
// 		localStorage.removeItem("token");
// 		localStorage.removeItem("user");
// 		window.history.pushState(this.props.user, "", "/login");
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.logOutUser}>Log Out</button>
// 			</div>
// 		);
// 	}
// }

// const mapStateToProps = (state) => ({ user: state.user.user });

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		// logOutUser: (user_info) => dispatch(logOutUser(user_info)),
// 		logOutUser: () => dispatch({ type: "LOGGED_OUT" })
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
