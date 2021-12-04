import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { UserFooter } from "../components/UserFooter";

class DashboardContainer extends Component {
	primaryRender() {
		const { first_name, last_name, joined } = this.props.user;
		return (
			<div>
				<span>
					{first_name} {last_name}
				</span>
				<div>Joined {joined}</div>
				<div>Upcoming Trips</div>
				<div>Past Trips</div>
				<button>+ New Trip</button>
				<UserFooter user={this.props.user} />
			</div>
		);
	}

	render() {
		// const { first_name, last_name, joined } = this.props.user;
		// console.log(this.props);
		if (this.props.user) {
			return <>{this.primaryRender()}</>;
		} else {
			return <Redirect to="/login" />;
			// return (
			// 	<div>
			// 		<p>Hello!</p>
			// 	</div>
			// );
		}
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(DashboardContainer);
