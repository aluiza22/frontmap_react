import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ProjectList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		};
		this.createMarkup = this.createMarkup.bind();
	}
	componentDidMount() {
		axios.get("http://frontmap.anadev.com.br/wp-json/wp/v2/projects").then(projects => {
			this.setState({
				projects: projects.data
			});
		});
	}
	createMarkup(html) {
		return { __html: html };
	}
	render() {
		return(
			<div>
			 {this.state.projects.map(project => (
			 	<Link to={`/${project.slug}`} key={project.id}>
			 		<div className="card" key={project.id}>
			 			<div className="card-content">
			 				<h3>{project.title.rendered}</h3>
			 				<div 
			 					dangerouslySetInnerHTML={this.createMarkup(
			 						project.content.rendered
			 					)}
			 				/>	 				
			 			</div>
			 		</div>
			 	</Link>
			 ))}
			</div>
		);
	}
}

export default ProjectList;