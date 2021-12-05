import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import DashboardContainer from "./DashboardContainer";
import Home from "./Home";
import Login from "./Login";
import NewTripForm from "./NewTripForm";

class AppContainer extends Component {
	// isLoggedIn = () => {
	// 	if (this.props.isLoggedIn)
	// 		// return <Route path="/dashboard" component={DashboardContainer} />;
	// 		// this.props.props.history.push("/dashboard");
	// 		// return <Link to="/dashboard" />;
	// 		return <Redirect to="/dashboard" />;
	// };

	render() {
		// console.log(this.props);
		// console.log(this.props.props);
		// if (this.props.isLoggedIn) {
		// 	debugger;
		// 	return <Redirect to="/dashboard" />;
		// }
		// if (!this.props.isLoggedIn)
		// 	return <Route path="/login" component={Login} />;

		return (
			<div>
				<Home />
				{/* <Switch>
					<Route path="/" component={Home} />
					<Route path="/dashboard" component={DashboardContainer} />;
					<Route path="/newtrip" component={NewTripForm}></Route>
				</Switch> */}
			</div>
		);
	}
}

// const mapStateToProps = (state) => ({
// 	user: state.user.user,
// 	isLoggedIn: state.user.isLoggedIn
// });

// const mapDispatchToProps = {};

// export default connect(mapStateToProps)(AppContainer);
export default AppContainer;
