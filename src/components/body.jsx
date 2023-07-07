import React, { Component } from 'react';
import Cards from './cards';

class Body extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className='container-fluid d-flex gap-2 flex-wrap my-4 justify-content-center user-select-none'>
					<Cards pokemons={this.props.pokemons} onPokemonSelect={this.props.onPokemonSelect} />
				</div>
			</React.Fragment>
		);
	}
}

export default Body;
