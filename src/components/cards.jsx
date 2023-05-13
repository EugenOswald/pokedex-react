import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../style/pokemonTyps.css';

class Cards extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				{this.props.pokemons.map((pokemon, index) => (
					<Card style={{ width: '10rem' }} role='button' key={index} onClick={() => this.props.onPokemonSelect(pokemon)}>
						<Card.Img variant='top' src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
						<Card.Body>
							<Card.Title>{pokemon.name}</Card.Title>
							<Card.Text>{pokemon.types.map((type) => type.type.name).join(', ')}</Card.Text>
						</Card.Body>
					</Card>
				))}
			</React.Fragment>
		);
	}
}

export default Cards;
