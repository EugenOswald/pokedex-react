import React, { Component } from 'react';
import '../style/style.css';
import pokedexIcon from '../imgs/pokedex-icon.png';
import ProgressBar from 'react-bootstrap/ProgressBar';

class StartLoadingscreen extends Component {
	render() {
		const { isLoading, progress } = this.props;
		return (
			<div className={`fullScreen d-flex justify-content-center align-items-center ${isLoading ? '' : 'd-none'}`}>
				<div className='d-flex align-items-center'>
					<img src={pokedexIcon} alt='' style={{ width: '3rem', height: '3rem' }} className='me-4' />
					<h1>Pokedex</h1>
					<div className='m-3 mt-4' style={{ width: '100px', height: '20px' }}>
						<ProgressBar now={progress} />
					</div>
				</div>
			</div>
		);
	}
}

export default StartLoadingscreen;

