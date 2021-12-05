import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
// import LoginContainer from "./containers/LoginContainer";
// import DashboardContainer from "./components/DashboardContainer";
// import UserContainer from "./components/UserContainer";
// import NewTripForm from "./components/NewTripForm";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AppContainer from "./components/AppContainer";
import DashboardContainer from "./components/DashboardContainer";
// import UserContainer from "./components/UserContainer";
// import { fetchCurrentUser } from "./actions/userActions";
// import Login from "./components/Login";

// export default class App extends Component {
class App extends Component {
	// componentDidMount() {
	// 	this.props.fetchCurrentUser();
	// }

	render() {
		console.log(this.props);

		// if (this.props.isLoggedIn) return <Redirect to="/dashboard" />;

		return (
			<div>
				<div>
					<Switch>
						{/* <Route exact path="/" component={Home} /> */}
						<Route exact path="/" component={AppContainer} />
						{/* <Route
							exact
							path="/"
							render={(props) => <AppContainer props={props} />}
						/> */}
						{/* <Route path="/dashboard" component={DashboardContainer} /> */}
						{/* <Route path="/login" component={UserContainer} />
						<Route path="/signup" component={UserContainer} /> */}
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
						{/* <Route path="/dashboard" component={DashboardContainer} />
						<Route path="/newtrip" component={NewTripForm} /> */}
					</Switch>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user,
	isloggedIn: state.user.isLoggedIn
});

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		fetchCurrentUser: () => dispatch(fetchCurrentUser())
// 	};
// };

export default connect(mapStateToProps)(App);
// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(null, mapDispatchToProps)(App);
