import React, { Component } from 'react';
import sass from '../scss/application.scss';


class Product extends Component {
	render() {
		return (
			<div>		
				<div className="productContainer">
					<div className="slideContainer">
						<div className="productDesign"></div>	
						<center><p>From conception to foundation</p>
						<button className="productButton">Learn more</button></center>
					</div>
				</div>

				<div className="productContainer">
					<div className="slideContainer">
						<div className="productDesignTwo"></div>	
						<center><p>From conception to foundation</p>
						<button className="productButton">Learn more</button></center>
					</div>
				</div>
			</div>
		)
	}
}


export default Product;