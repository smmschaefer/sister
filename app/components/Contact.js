import React, { Component, PropTypes } from 'react';
import FormContact from './FormContact';
import ContactRenderData from './ContactRenderData';
import Header from './Header';


const testData = [
	{
		name: 'Joe',
		email: 'joemail',
		message: 'Sup dude'
	},
	
	{
		name: 'Bill',
		email: 'billmail',
		message: 'Hey man'
	}
]

class Contact extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: testData
		}
	}
	
	 addContact(contact) {
	 	 this.setState({data: this.state.data.concat(contact)});
	 }
	
	render() {
	
		return (
			<div>
				<Header />
				<h1>CONTACT PAGE</h1>
			    <br />
				<br />
			<FormContact data={this.state.data} addContact={this.addContact.bind(this)} />
			<br />
			<ContactRenderData data={this.state.data} />
			</div>
		)
	}
}
	
Contact.PropTypes = {
	data: PropTypes.arrayOf(
		PropTypes.object
	)
}

Contact.defaultProps = {
	data: testData
}
		
			
export default Contact;