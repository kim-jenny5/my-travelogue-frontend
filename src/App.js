import React, { Component } from "react";
// import Home from "./components/Home";
import UserContainer from "./containers/UserContainer";

class App extends Component {
	componentDidMount() {}

	render() {
		return (
			<div className="App">
				<UserContainer />
				{/* <UserContainer url="http://localhost:3000" /> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
