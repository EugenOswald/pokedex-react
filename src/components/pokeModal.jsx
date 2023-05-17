import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import arrowLeft from '../imgs/back.png';
import arrowRight from '../imgs/forward.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../style/style.css';
import '../style/pokemonTyps.css';

class PokeModal extends Component {
	handleNext = () => {
		this.props.onNext();
	};

	handlePrev = () => {
		this.props.onPrev();
	};
	render() {
		const { pokemon, show, handleClose } = this.props;
		if (!pokemon) return null; // Wenn kein Pokémon ausgewählt ist, nichts rendern

		return (
			<Modal show={show} onHide={handleClose} contentClassName='rounded-20' style={{ fontFamily: 'Baloo Regular' }}>
				<Modal.Header className={`${pokemon.types[0].type.name}-linear-gradient d-flex flex-column`}>
					<Button variant='none' className='btn-close' onClick={handleClose}></Button>
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
					<div className='d-flex gap-4'>
						<Button variant='outline-light' onClick={this.handlePrev} disabled={this.props.pokemon.id === 1}>
							<img style={{ width: '20px' }} src={arrowLeft} alt='Back' />
						</Button>

						<Button
							variant='outline-light'
							onClick={this.handleNext}
							disabled={this.props.pokemon.id === this.props.allPokemons.length}
						>
							<img style={{ width: '20px' }} src={arrowRight} alt='Next' />
						</Button>
					</div>
				</Modal.Header>
				<Modal.Body>
					<div className='d-flex flex-column align-items-center mt-2'>
						<div>
							<div>
								<img src="" alt="" srcset="" />
								<span></span>
							</div>
						</div>
						<h3>Base statistics</h3>
						<div className='w-100 my-3'>

							{/* <div>
								<span>Weight:</span> <span>{pokemon.weight}</span>
							</div>
 */}
							<div className='d-flex align-items-center'>
								<span className='me-1 base-stats-name'>HP</span>
								<span className='px-1 border-vertical'>{pokemon.stats[0].base_stat}</span>
								<ProgressBar now={pokemon.stats[0].base_stat} variant={`${pokemon.types[0].type.name}`} className='w-100' />
							</div>
							<div className='d-flex align-items-center'>
								<span className='me-1 base-stats-name'>ATT</span>
								<span className='px-1 border-vertical'>{pokemon.stats[1].base_stat}</span>
								<ProgressBar now={pokemon.stats[1].base_stat} variant={`${pokemon.types[0].type.name}`} className='w-100' />
							</div>
							<div className='d-flex align-items-center'>
								<span className='me-1 base-stats-name'>DEF</span>
								<span className='px-1 border-vertical'>{pokemon.stats[2].base_stat}</span>
								<ProgressBar now={pokemon.stats[2].base_stat} variant={`${pokemon.types[0].type.name}`} className='w-100' />
							</div>
							<div className='d-flex align-items-center'>
								<span className='me-1 base-stats-name'>SP-ATT</span>
								<span className='px-1 border-vertical'>{pokemon.stats[3].base_stat}</span>
								<ProgressBar now={pokemon.stats[3].base_stat} variant={`${pokemon.types[0].type.name}`} className='w-100' />
							</div>
							<div className='d-flex align-items-center'>
								<span className='me-1 base-stats-name'>SP-DEF</span>
								<span className='px-1 border-vertical'>{pokemon.stats[4].base_stat}</span>
								<ProgressBar now={pokemon.stats[4].base_stat} variant={`${pokemon.types[0].type.name}`} className='w-100' />
							</div>
							<div className='d-flex align-items-center'>
								<span className='me-1 base-stats-name'>SPD</span>
								<span className='px-1 border-vertical'>{pokemon.stats[5].base_stat}</span>
								<ProgressBar now={pokemon.stats[5].base_stat} variant={`${pokemon.types[0].type.name}`} className='w-100' />
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		);
	}
}

export default PokeModal;
