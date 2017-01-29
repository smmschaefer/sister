import React, { Component, PropTypes } from 'react';


class ContactRenderData extends Component {
	render() {
		const renObjData = this.props.data.map( (objInner, index) => {
   		 	return (<p key={index}>
						Name: {objInner.name} < br/>
						Email: {objInner.email} <br />
						Message: {objInner.message} </p>
			)
		});
		return (
			<div>
				{renObjData}
			</div>
		)
	}
}

ContactRenderData.PropTypes = {
	data: PropTypes.arrayOf(
		PropTypes.obj
	)
}

ContactRenderData.defaultProps = {
	data: ''
}


export default ContactRenderData;
