import React, { Component } from 'react';
import Navbar from './navbar';
import Search from './search';

class Header extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className='container'>
					<Navbar />
					<Search />
				</div>
			</React.Fragment>
		);
	}
}

export default Header;
