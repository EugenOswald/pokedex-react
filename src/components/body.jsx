import React, { Component } from 'react';
import Cards from './cards';
import LoadingButton from '../components/loadingButton';

class Body extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className='container-fluid d-flex gap-2 flex-wrap my-4 justify-content-center'>
					<Cards pokemons={this.props.pokemons} onPokemonSelect={this.props.onPokemonSelect} />
				</div>
				<LoadingButton onLoadMore={this.props.onLoadMore} disabled={!this.props.canLoadMore} />
			</React.Fragment>
		);
	}
}

export default Body;
