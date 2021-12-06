import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const MainNav = () => {
	return (
		<div id="main-nav">
			{/* <Container>
				<Row> */}
			{/* <Col md={4}> */}
			<span className="main-title">
				<span>my </span>
				<span className="emphasis">travelogue</span>
			</span>
			{/* </Col> */}
			{/* <span> */}

			<NavLink to="/login" className="link btn-link user-btn login-btn">
				Log In
			</NavLink>
			<NavLink to="/signup" className="link btn-link user-btn signup-btn">
				Sign Up
			</NavLink>
			{/* </Row>
			</Container> */}
		</div>
	);
};
