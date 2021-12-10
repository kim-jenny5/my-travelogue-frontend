import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
// import LoginContainer from "./containers/LoginContainer";
// import DashboardContainer from "./components/DashboardContainer";
// import UserContainer from "./components/UserContainer";
import NewTripFormCont from "./components/NewTripFormCont";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import AppContainer from "./components/AppContainer";
import DashboardContainer from "./components/DashboardContainer";
// import TripDetails from "./components/TripDetails";
// import UserContainer from "./components/UserContainer";
import { fetchCurrentUser } from "./actions/userActions";
import { fetchTrips } from "./actions/tripActions";
// import { logOutUser } from "./actions/userActions";
import UserContainer from "./components/UserContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// import Login from "./components/Login";
// import { MainFooter } from "./components/MainFooter";
// import { MainNav } from "./components/MainNav";

// export default class App extends Component {
class App extends Component {
	componentDidMount() {
		let token = localStorage.getItem("token");
		// let user = localStorage.getItem("user");
		if (token) {
			this.props.fetchCurrentUser();
			///////////
			// this.props.fetchTrips(this.props.user);
			// this.props.fetchTrips(user);
		}
		// if (this.props.user) {
		// if (this.props.isLoggedIn) {
		// 	this.props.fetchTrips(this.props.user);
		// }
	}

	// logout = () => {
	// 	this.props.logOutUser();
	// 	window.history.pushState(user_info, "", "/login");
	// };

	render() {
		// console.log(this.props);

		// if (this.props.isLoggedIn) return <Redirect to="/dashboard" />;
		// if (!this.props.isLoggedIn) return <Redirect to="/login" />;
		// debugger;
		// if ()
		// if (!this.props.isLoggedIn) return <Redirect to="/login" />;
		const theme = createTheme({
			typography: { fontFamily: "Poppins" },
			palette: { primary: { main: "#0F43F9" } }
		});

		return (
			<div>
				<ThemeProvider theme={theme}>
					<div>
						{/* if loading then , else switch statement */}
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/login" component={UserContainer} />
							<Route exact path="/signup" component={UserContainer} />
							{/* <Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} /> */}
							<Route exact path="/dashboard" component={UserContainer} />
							{/* <Route exact path="/dashboard" component={DashboardContainer} /> */}
							{/* <Route exact path="/dashboard/trips/new" component={NewTripFormCont} /> */}
							{/* <Route exact path="/dashboard" component={DashboardContainer} /> */}
							{/* <Route exact path="/dashboard" component={DashboardContainer} /> */}
							{/* <Route
							exact
							path="/dashboard/trips/new"
							component={UserContainer}
						/> */}
							{/* <Route
							exact
							path="/dashboard/trips/new"
							component={DashboardContainer}
						/> */}
							{/* <Route exact path="/dashboard/trips/new" component={NewTripFormCont} /> */}
							{/* NOTE: for now will just make a standing route and nest it later
						into trips */}
							{/* <Route path="/tripdetails" component={TripDetails} /> */}
							{/* <Route
							path="trips/:id"
							render={(routerProps) => <TripDetails {...routerProps} />}
						/> */}
							{/* <Route path="/login" component={UserContainer} />
						<Route path="/signup" component={UserContainer} /> */}
							{/* <Route path="/dashboard" component={DashboardContainer} />
						<Route path="/newtrip" component={NewTripFormCont} /> */}
						</Switch>
					</div>
				</ThemeProvider>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user,
	isloggedIn: state.user.isLoggedIn
	// trips: state.trips.trips
});

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCurrentUser: () => dispatch(fetchCurrentUser())
		// fetchTrips: (user_info) => dispatch(fetchTrips(user_info)),
		// logOutUser: () => dispatch(logOutUser())
		// logOutUser: () => dispatch({ type: "LOGGED_OUT" })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(null, mapDispatchToProps)(App);
