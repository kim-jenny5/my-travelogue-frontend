import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import { fetchCurrentUser } from "./actions/userActions";
import UserContainer from "./components/UserContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

class App extends Component {
	componentDidMount() {
		let token = localStorage.getItem("token");
		if (token) {
			this.props.fetchCurrentUser();
		}
	}

	render() {
		const theme = createTheme({
			typography: { fontFamily: "Poppins" },
			palette: { primary: { main: "#0F43F9" } }
		});

		return (
			<div>
				<ThemeProvider theme={theme}>
					<div>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/login" component={UserContainer} />
							<Route exact path="/signup" component={UserContainer} />
							<Route exact path="/dashboard" component={UserContainer} />
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
});

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCurrentUser: () => dispatch(fetchCurrentUser())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
