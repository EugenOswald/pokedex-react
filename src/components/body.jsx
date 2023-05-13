import React, { Component } from 'react';
import Cards from './cards';

class Body extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className='container-fluid d-flex gap-4 flex-wrap my-4 justify-content-center'>
					<Cards pokemons={this.props.pokemons} onPokemonSelect={this.props.onPokemonSelect} />
				</div>
			</React.Fragment>
		);
	}
}

export default Body;
