// have this be the parent component
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import UserContainer from "./containers/UserContainer";
import { fetchCurrentUser } from "./actions/userActions";

// export default class App extends Component {
class App extends Component {
	// componentDidMount() {}

	render() {
		return (
			<div>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={UserContainer} />
						<Route path="/signup" component={UserContainer} />
					</Switch>
				</div>
			</div>
		);
	}
}

// const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCurrentUser: () => dispatch(fetchCurrentUser())
	};
};

export default connect(null, mapDispatchToProps)(App);
