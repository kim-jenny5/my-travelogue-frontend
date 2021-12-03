// have this be the parent component
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import LoginForm from "./containers/LoginForm";
import UserContainer from "./containers/UserContainer";
import { fetchCurrentUser } from "./actions/userActions";

// export default class App extends Component {
class App extends Component {
	state = {
		user: {}
	};

	componentDidMount() {
		this.props.fetchCurrentUser();
	}

	render() {
		return (
			<div>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={LoginForm} />
						<Route path="/signup" component={UserContainer} />
						<Route path="/myprofile" component={UserContainer} />
					</Switch>
				</div>
			</div>
		);
	}
}

// const mapStateToProps = (state) => ({
// 	loggedIn: state.user.loggedIn
// });

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCurrentUser: () => dispatch(fetchCurrentUser())
	};
};

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(null, mapDispatchToProps)(App);
