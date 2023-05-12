import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import '../style/pokemonTyps.css';

class Cards extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				{this.props.pokemons.map((pokemon, index) => (
					<Col key={index} md={4} onClick={() => this.props.onPokemonSelect(pokemon)}>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant='top' src={pokemon.sprites.front_default} alt={pokemon.name} />
							<Card.Body>
								<Card.Title>{pokemon.name}</Card.Title>
								<Card.Text>{pokemon.types.map((type) => type.type.name).join(', ')}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</React.Fragment>
		);
	}
}

export default Cards;
