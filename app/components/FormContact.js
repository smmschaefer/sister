import React, { Component, PropTypes } from 'react';


class FormContact extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formValues: {
				name: '',
				email: '',
				message: ''
			}
		}
	}
	
	handleChange(event) {
		let formValues = this.state.formValues;
		let name = event.target.name;
		let value = event.target.value;
		
		formValues[name] = value;
		this.setState({
			formValues
		});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		console.log("NEW FORM VALUES " + this.state.formValues.name + " " + this.state.formValues.email + " " + 
			this.state.formValues.messsage);
		const {name, email, message} = this.state.formValues
		this.props.addContact({name, email, message});
		
		//HANDLE NEW CONTACT AND SUBMIT TO MONGODB
	}
	
	render() {		
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
               <label> Name:
                   <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
               </label><br />
               <label> Email:
                   <input type="text" name="email" placeholder="Email" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)}/>
               </label><br />
			   		   Message: <br />
			   <textarea type="text" name="message" placeholder="Your Message..." value={this.state.formValues["message"]} 
			   	onChange={this.handleChange.bind(this)}></textarea><br />
                   <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
		)
	}
}

FormContact.PropTypes = {
	data: PropTypes.arrayOf(
		PropTypes.object
	)
}

FormContact.defaultProps = {
	data: ''
}


export default FormContact