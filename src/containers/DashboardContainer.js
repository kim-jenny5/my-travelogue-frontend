import React, { Component } from "react";
import { connect } from "react-redux";

class DashboardContainer extends Component {
	userExists() {
		const { first_name, last_name, joined } = this.props.user;
	}

	render() {
		if (this.props.user) {
			return <>{this.userExists}</>;
		} else {
			return <div>Hello!</div>;
		}
		// console.log(this.props);
		// return (
		// 	<div>
		// 		<div>
		// 			{first_name} {last_name}
		// 		</div>
		// 		<div>Joined {joined}</div>
		// 		{/* <p>Hello</p> */}
		// 	</div>
		// );
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(DashboardContainer);
