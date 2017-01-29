import React, { Component, PropTypes } from 'react';
import Header from './Header';


//NOT RENDERING
const myImg = () => {
	return (
		<img src="./img/me.png" alt="me"></img>
	)
}

const myProgSkill = [
		"HTML", "CSS", "JavaScript", "React", "Axios", "PHP", "Webpack", "Node", "SASS", "Express", "Handlebars", "Node", "MySQL", "MongoDB"
];

const myInterest = "Modern web development, front/back-end and jamming.";

class AboutMe extends Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {	
		const mySkills = this.props.progSkills.map((skill,idx) => {
			return <li key={idx}>{skill}</li>
		});
		
		return (
			<div>
				<p>NAME: {this.props.name}</p>
				<p>NUMBER: {this.props.number}</p>
				<p>EMAIL: <a href="mailto:smmschaefer@gmail.com">{this.props.email}</a></p>
				<p>INTEREST: {this.props.interest}</p>
				<h3>Education</h3>
				<p>Bachelor of Science in Computer Science</p>
				<p>Portland State University 2012-2016</p>
				<p>Associates in Criminology</p>
				<p>Pioneer Pacific 2007-2009</p>
				<p>PROGRAMMING JARGIN:</p> <ul>{mySkills}</ul>
			</div>
		)
	}
}

AboutMe.PropTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.number,
	email: PropTypes.string.isRequired,
	interest: PropTypes.string.isRequired,
	progSkills: PropTypes.arrayOf(
		PropTypes.string
	),
	testOut: PropTypes.string,
	image: PropTypes.func
}

AboutMe.defaultProps = {
	name: "Sam",
	number: 5036218304,
	email: "smmschaefer@gmail.com",
	interest: myInterest,
	progSkills: myProgSkill,
	testOut: 'Testing this',
	image: myImg
}

const About = () => {
	return (
		<div>
			<Header />
			<h2>About</h2>
			<div className="row">
				<div className="col-md-4">
					<img src="./img/me.png" alt="me" className="img-rounded img-responsive"></img>				
				</div>
				<div className="col-md-8"> <AboutMe /> </div>
			</div>
		
		</div>
	)
}




export default About;