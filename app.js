import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/header";
import ProjectList from "./components/projectList";
import ProjectView from "./components/projectView";

const App = () => (
	<Router>
		<div>
			<Header />
			<section className="section container content">
			  <Route exact path="/" component={ProjectList} />
			  <Route path="/:slug" component={ProjectView} />
			</section>
		</div>
	</Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
