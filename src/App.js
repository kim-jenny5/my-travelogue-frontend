import React, { Component } from "react";
// import Home from "./components/Home";
import UserContainer from "./containers/UserContainer";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<UserContainer />
				{/* <UserContainer url="http://localhost:3000" /> */}
			</div>
		);
	}
}
