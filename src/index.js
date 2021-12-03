import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./reducers/rootReducer";
// import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

// let store = createStore(rootReducer, applyMiddleware(thunk));

// NOTE: THIS IS THE FILE WHERE YOU IMPORT THE REDUCERS (COMBINEREDUCER) so provider has access to it

ReactDOM.render(
	// <Provider store={store}>
	<Router>
		<App />
	</Router>,
	// </Provider>,
	document.getElementById("root")
);
