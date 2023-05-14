import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../style/pokemonTyps.css';
import images from './images';

class Cards extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				{this.props.pokemons.map((pokemon, index) => (
					<Card
						style={{ fontFamily: 'Baloo Regular' }}
						className={`pokemonCards ${pokemon.types[0].type.name}`}
						role='button'
						key={index}
						onClick={() => this.props.onPokemonSelect(pokemon)}
					>
						<Card.Body>
							<Card.Title className='text-secondary'># {pokemon.id}</Card.Title>
							<Card.Title>{pokemon.name}</Card.Title>
							{pokemon.types.map((type) => (
								<Card.Img className='card-img-icon' src={images[type.type.name]} key={type.type.name} />
							))}
						</Card.Body>
						<Card.Img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
					</Card>
				))}
			</React.Fragment>
		);
	}
}

export default Cards;
