import React, { Component } from 'react';
import sass from '../scss/application.scss'
import Flip from './Flip';
import Header from './Header';
import Product from './Product';


class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Product />
			</div>
		)
	}
}


export default Home;