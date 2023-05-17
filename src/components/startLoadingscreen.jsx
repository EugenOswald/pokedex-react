import React, { Component } from 'react';
import '../style/style.css';
import pokedexIcon from '../imgs/pokedex-icon.png';

class StartLoadingscreen extends Component {
	state = {};
	render() {
		return (
			<div className={`fullScreen d-flex justify-content-center align-items-center ${this.props.isLoading ? '' : 'd-none'}`}>
				<div className='d-flex align-items-center'>
					<img src={pokedexIcon} alt='' style={{ width: '3rem', height: '3rem' }} className='me-4' />
					<h1>Pokedex</h1>
					<div className='spinner-border m-3' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				</div>
			</div>
		);
	}
}

export default StartLoadingscreen;
