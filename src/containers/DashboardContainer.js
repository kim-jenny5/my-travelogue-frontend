import React, { Component } from "react";
import { connect } from "react-redux";

class DashboardContainer extends Component {
	render() {
		// const { first_name, last_name, joined } = this.props.user;
		console.log(this.props);
		return (
			<div>
				{/* <div>
					{first_name} {last_name}
				</div>
				<div>Joined {joined}</div> */}
				<p>Hello</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(DashboardContainer);
