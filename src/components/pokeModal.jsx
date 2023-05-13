import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class PokeModal extends Component {
	render() {
		const { pokemon, show, handleClose } = this.props;
		if (!pokemon) return null; // Wenn kein Pokémon ausgewählt ist, nichts rendern

		return (
			<Modal show={show} onHide={handleClose} contentClassName='rounded-20' style={{ fontFamily: 'Baloo Regular' }}>
				<Modal.Header className={`${pokemon.types[0].type.name}-linear-gradient d-flex flex-column`}>
					<Button variant='none' className='me-2 btn-close' onClick={handleClose}></Button>
					<div className='position-relative d-flex flex-column align-items-center'>
						<img
							src={pokemon.sprites.other['official-artwork'].front_default}
							alt={pokemon.name}
							className='z-index-1 modal-poke-img'
						/>
						<div>
							<Modal.Title className='position-absolute card-title bottom-0 start-0'>
								<span className='pokemon-id font-family: "Baloo Regular"'>
									{pokemon.id} <span className='capitalize card-name'>{pokemon.name}</span>
								</span>
							</Modal.Title>
						</div>
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
			</Modal>
		);
	}
}

export default PokeModal;
