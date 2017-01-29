import React, { Component } from 'react';
import { Router, Route, Redirect, IndexRoute, Link, hashHistory } from 'react-router'; 
import Routes from '../utils/Routes';
import Header from './Header';
import sass from '../scss/application.scss';


const TopNavProject = () => <div><LinksProject /></div>;

const LinksProject = () => 
	<nav>
	 	<Link className="pulseTxt" to="/Projects">Project </Link> |
		<Link className="pulseTxt" to="/JsxConvert"> JSX Project </Link> |
		<a className="pulseTxt" href="#"> Database Class Project </a>  
	</nav>


class Projects extends Component {
	render() {
		return (
			<div className="main-container">
				<Header />
				<div>
				<TopNavProject history={this.props.history}/>
				</div>
				<div className="container">
					<h3>Projects</h3>
					{this.props.children}
				</div>
			</div>
		)
	}
}


export default Projects;