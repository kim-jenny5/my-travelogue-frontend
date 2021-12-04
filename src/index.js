import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
// import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

// let store = createStore(rootReducer, applyMiddleware(thunk));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// NOTE: THIS IS THE FILE WHERE YOU IMPORT THE REDUCERS (COMBINEREDUCER) so provider has access to it

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
