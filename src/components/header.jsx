import React, { Component } from 'react';
import Navbar from './navbar';
import Dropdownmenu from './dropdownmenu';

class Header extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className='container'>
					<div className='row'>
						<Navbar/>
						<Dropdownmenu onClick={this.props.onClick} onSelectGeneration={this.props.onSelectGeneration} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Header;
