import React, { Component } from 'react';
import '../style/style.css';

class Startpage extends Component {
	state = {};
	render() {
		return (
			<div className='d-flex justify-content-center mt-5'>
				<h2 className='' style={{ fontFamily: 'Baloo Regular' }}>
					Select a gerneration!
				</h2>
			</div>
		);
	}
}

export default Startpage;
