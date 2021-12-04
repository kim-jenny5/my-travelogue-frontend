// have this be the parent component
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
// import Login from "./containers/Login";
// import Login from "./components/Login";
// import LoginContainer from "./containers/LoginContainer";
import DashboardContainer from "./containers/DashboardContainer";
import UserContainer from "./containers/UserContainer";
import NewTripForm from "./components/NewTripForm";
// import { fetchCurrentUser } from "./actions/userActions";
// import Login from "./components/Login";

// export default class App extends Component {
class App extends Component {
	// componentDidMount() {
	// 	this.props.fetchCurrentUser();
	// }

	render() {
		console.log(this.props);
		return (
			<div>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={UserContainer} />
						<Route path="/signup" component={UserContainer} />
						<Route path="/dashboard" component={DashboardContainer} />
						{/* <Route path="/newtrip" component={NewTripForm} /> */}
						<Route path="/newtrip" component={NewTripForm} />
						{/* <Route path="/newtrip" component={UserContainer} /> */}
					</Switch>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user
});

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		fetchCurrentUser: () => dispatch(fetchCurrentUser())
// 	};
// };

export default connect(mapStateToProps)(App);
// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(null, mapDispatchToProps)(App);
