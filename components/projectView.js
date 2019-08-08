import React, { Component } from "react";
import axios from "axios";

class ProjectView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project: {}
		};
		this.createMarkup = this.createMarkup.bind();
	}
	componentDidMount() {
		const slug = this.props.match.params.slug;
		axios
			.get(`http://localhost/frontend-roadmap/wp-json/wp/v2/projects?slug=${slug}`)
			.then(project => {
			this.setState({
				project: project.data[0]
			});
		});
	}
	createMarkup(html) {
		return { __html: html };
	}
	render() {
		let build;
		if (this.state.project.title) {
			build = (
				<div>
					<h1>{this.state.project.title.rendered}</h1>
					<div 
						dangerouslySetInnerHTML={this.createMarkup(
	 						this.state.project.content.rendered
	 					)}
	 				/>	
	 			</div>
			);
		} else {
			build = <div />;
		}
		return build;
	}
}

export default ProjectView;