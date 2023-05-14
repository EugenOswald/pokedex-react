import React, { Component } from 'react';
import Body from './components/body';
import Loadingscreen from './components/loadingscreen';
import PokeModal from './components/pokeModal';
import Header from './components/header';

class App extends Component {
	state = { allPokemons: [], selectedPokemon: null, selectedPokemonIndex: 0, showModal: false };
	handlePokemonSelect = (pokemon) => {
		const index = this.state.allPokemons.findIndex((p) => p.name === pokemon.name);
		this.setState({ selectedPokemon: pokemon, selectedPokemonIndex: index, showModal: true });
	};

	handleModalClose = () => {
		this.setState({ showModal: false });
	};

	async componentDidMount() {
		await this.init();
	}

	async init() {
		for (let i = 1; i <= 34; i++) {
			await this.loadPokemon(i);
		}
	}

	async loadPokemon(i) {
		let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		let response = await fetch(url);
		let pokemon = await response.json();
		console.log(pokemon);
		pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

		this.setState((prevState) => ({
			allPokemons: [...prevState.allPokemons, pokemon],
		}));
	}

	handleNext = () => {
		this.setState((prevState) => {
			const newIndex = (prevState.selectedPokemonIndex + 1) % this.state.allPokemons.length;
			return {
				selectedPokemonIndex: newIndex,
				selectedPokemon: this.state.allPokemons[newIndex],
			};
		});
	};

	handlePrev = () => {
		this.setState((prevState) => {
			const newIndex =
				prevState.selectedPokemonIndex - 1 < 0 ? this.state.allPokemons.length - 1 : prevState.selectedPokemonIndex - 1;
			return {
				selectedPokemonIndex: newIndex,
				selectedPokemon: this.state.allPokemons[newIndex],
			};
		});
	};

	render() {
		return (
			<React.Fragment>
				<Loadingscreen />
				<PokeModal
					show={this.state.showModal}
					handleClose={this.handleModalClose}
					pokemon={this.state.selectedPokemon}
					onNext={this.handleNext}
					onPrev={this.handlePrev}
				/>
				<Header />
				<Body pokemons={this.state.allPokemons} onPokemonSelect={this.handlePokemonSelect} />
			</React.Fragment>
		);
	}
}

export default App;
