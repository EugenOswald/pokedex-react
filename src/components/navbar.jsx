import React, { Component } from 'react';
import pokedexIcon from '../imgs/pokedex-icon.png';

class Navbar extends Component {
	state = {};
	render() {
		return (
			<nav className='navbar my-4'>
				<div className='container justify-content-center'>
					<div className='row'>
						<div className='col-6 d-flex align-items-center text-center'>
							<img src={pokedexIcon} alt='' style={{ width: '3rem', height: '3rem' }} className='me-4' />
							<span className='navbar-brand mb-0 h1 fs-1' style={{ fontFamily: 'Baloo Regular' }}>
								Pokedex
							</span>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
