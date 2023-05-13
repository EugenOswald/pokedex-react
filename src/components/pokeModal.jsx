import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../style/pokemonTyps.css';

class PokeModal extends Component {
	render() {
		const { pokemon, show, handleClose } = this.props;
		if (!pokemon) return null; // Wenn kein Pokémon ausgewählt ist, nichts rendern

		return (
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<div className={`${pokemon.types[0].type.name}-linear-gradient`}>
						<Modal.Title>
							{pokemon.id} {pokemon.name}
						</Modal.Title>
						<img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
					</div>
				</Modal.Header>
				<Modal.Body>
					<p>
						<b>Weight:</b> {pokemon.weight}g
					</p>
					<p>
						<b>Base HP:</b> {pokemon.stats[0].base_stat}
					</p>
					<p>
						<b>Base Attack:</b> {pokemon.stats[1].base_stat}
					</p>
					<p>
						<b>Base Defense:</b> {pokemon.stats[2].base_stat}
					</p>
					<p>
						<b>Base Special Attack:</b> {pokemon.stats[3].base_stat}
					</p>
					<p>
						<b>Base Special Defense:</b> {pokemon.stats[4].base_stat}
					</p>
					<p>
						<b>Base Speed:</b> {pokemon.stats[5].base_stat}
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default PokeModal;
