import React, { Component } from 'react';
import Header from './Header';


class JsxConvert extends Component {
	constructor() {
		super();
		this.state = {
			input: '/* add JSX HERE */',
			output: '',
			err: ''
		}
		
	}
	
	update(e) {
		let code = e.target.value;
		try {
			this.setState({
				output: window.Babel
				.transform(code, { presets: ['es2015', 'react']})
				.code,
				err: ''
			})
		}
		catch(err) {
			this.setState({ err: 'err.message' })
		}
	}
	
	render() {
		return(
			<div>
				<Header />
				<header>{this.state.err}</header>
				<div className="container">
					<p>Type JSX below and below that the React.JS will appear!</p>
					<textarea
						onChange={this.update.bind(this)} 
						defaultValue={this.state.input}/>
					<pre>
						{this.state.output}
					</pre>
				</div>
			</div>
		)
	}
}

export default JsxConvert;


