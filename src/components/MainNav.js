import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const MainNav = () => {
	return (
		<div className="nav main-nav">
			{/* <Container>
				<Row> */}
			{/* <Col md={4}> */}
			<span className="main-title homepage">
				<span>my </span>
				<span className="emphasis">travelogue</span>
			</span>
			{/* </Col> */}
			{/* <span> */}
			<span className="container">
				<NavLink to="/login" className="link user-btn login-btn">
					Log In
				</NavLink>
				<NavLink to="/signup" className="link user-btn signup-btn">
					Sign Up
				</NavLink>
			</span>
			{/* </Row>
			</Container> */}
		</div>
	);
};
