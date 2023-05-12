import React, { Component } from 'react';
import '../style/pokemonTyps.css';

class Cards extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				{this.props.pokemons.map((pokemon, index) => (
					<div key={index} className='card' style={{ width: '18rem' }} onClick={() => this.props.onPokemonSelect(pokemon)}>
						<img src={pokemon.sprites.front_default} className='card-img-top' alt={pokemon.name} />
						<div className='card-body'>
							<h5 className='card-title'>{pokemon.name}</h5>
							<p className='card-text'>{pokemon.types.map((type) => type.type.name).join(', ')}</p>
						</div>
					</div>
				))}
			</React.Fragment>
		);
	}
}

export default Cards;
