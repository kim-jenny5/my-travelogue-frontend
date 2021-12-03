import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { currentUser } from "../api/fetchUser";
import { connect } from "react-redux";
import Home from "../components/Home";

import LoginForm from "./LoginForm";
import Signup from "../components/Signup";

export default function UserContainer() {
	return <div></div>;
}
