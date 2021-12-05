import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { fetchTrips } from "../actions/tripActions";
import { UserFooter } from "../components/UserFooter";
import UserHeader from "../components/UserHeader";
// import NewTripForm from "../components/NewTripForm";

class DashboardContainer extends Component {
	componentDidMount() {
		this.props.fetchTrips(this.props.user);
	}

	produceNewTripForm = () => {
		// e.preventDefault();
		// return <Redirect to="/newtrip" />;
		// return <NewTripForm />;
		return <Link to="/newtrip" />;
	};

	primaryRender() {
		const { first_name, last_name, joined } = this.props.user;
		return (
			<div>
				<UserHeader />
				<span>
					{first_name} {last_name}
				</span>
				<div>Joined {joined}</div>
				<div>Upcoming Trips</div>
				<div>Past Trips</div>
				<Link to="/newtrip">+ New Trip</Link>
				{/* <button onClick={this.produceNewTripForm}>+ New Trip</button> */}
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
	user: state.user.user
});

const mapDispatchToProps = (dispatch) => {
	return { fetchTrips: (user_info) => dispatch(fetchTrips(user_info)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
