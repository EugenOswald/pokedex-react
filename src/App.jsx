import React, { Component } from 'react';
import Body from './components/body';
import Loadingscreen from './components/loadingscreen';
import PokeModal from './components/pokeModal';
import Header from './components/header';
import Footer from './components/footer';

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

	loadMorePokemon = async () => {
		const nextPokemonId = this.state.allPokemons.length + 1;
		for (let i = nextPokemonId; i < nextPokemonId + 30; i++) {
			await this.loadPokemon(i);
		}
	};

	async loadPokemon(i) {
		let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		let response = await fetch(url);
		let pokemon = await response.json();
		pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

		const germanDescription = await this.fetchPokemonData(i); // Aufruf der neuen Funktion
		console.log(germanDescription); // Ausgabe der deutschen Beschreibung

		this.setState((prevState) => ({
			allPokemons: [...prevState.allPokemons, pokemon],
		}));
	}

	fetchPokemonData = async (id) => {
		const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
		const response = await fetch(url);
		const data = await response.json();
		const germanDescription = data.flavor_text_entries.find((entry) => entry.language.name === 'de').flavor_text;
		return germanDescription;
	};

	handleNext = () => {
		this.setState((prevState) => {
			let newIndex = prevState.selectedPokemonIndex + 1;
			if (newIndex >= this.state.allPokemons.length) {
				newIndex = this.state.allPokemons.length - 1;
			}
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
					allPokemons={this.state.allPokemons}
				/>
				<Header />
				<Body pokemons={this.state.allPokemons} onPokemonSelect={this.handlePokemonSelect} />
				<Footer onLoadMore={this.loadMorePokemon} />
			</React.Fragment>
		);
	}
}

export default App;
