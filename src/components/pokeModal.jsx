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
					<Modal.Title>{pokemon.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Type: {pokemon.type}</p>
					<p>Height: {pokemon.height}</p>
					<p>Weight: {pokemon.weight}</p>
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
