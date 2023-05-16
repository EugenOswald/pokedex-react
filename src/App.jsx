import React, { Component } from 'react';
import Body from './components/body';
import StartLoadingscreen from './components/startLoadingscreen';
import PokeModal from './components/pokeModal';
import Header from './components/header';

class App extends Component {
	state = { allPokemons: [], selectedPokemon: null, selectedPokemonIndex: 0, showModal: false, canLoadMore: true };
	/* IN state speichere ich die sachen die während der Lebensdauer der Komponente geändert werden können */

	handlePokemonSelect = (pokemon) => {
		const index = this.state.allPokemons.findIndex((p) => p.name === pokemon.name);
		this.setState({ selectedPokemon: pokemon, selectedPokemonIndex: index, showModal: true });
	};

	handleModalClose = () => {
		this.setState({ showModal: false });
	};

	loadMorePokemon = async () => {
		if (this.state.allPokemons.length < 1010) {
			let lastLoadedPokemonId = this.state.allPokemons[this.state.allPokemons.length - 1].id;
			let nextPokemonId = lastLoadedPokemonId + 1;
			for (let i = nextPokemonId; i < nextPokemonId + 30 && i <= 1010; i++) {
				await this.loadPokemon(i);
			}
			lastLoadedPokemonId = this.state.allPokemons[this.state.allPokemons.length - 1].id;
			this.setState({ canLoadMore: lastLoadedPokemonId < 1010 });
		}
	};
	loadGeneration = async (generation) => {
		this.setState({ allPokemons: [] });

		let start = 1;
		let end = 34;
		switch (generation) {
			case 'all':
				start = 1;
				end = 34;
				break;
			case '1':
				start = 1;
				end = 151;
				break;
			case '2':
				start = 152;
				end = 251;
				break;
			case '3':
				start = 252;
				end = 386;
				break;
			case '4':
				start = 387;
				end = 493;
				break;
			case '5':
				start = 494;
				end = 649;
				break;
			case '6':
				start = 650;
				end = 721;
				break;
			case '7':
				start = 722;
				end = 809;
				break;
			case '8':
				start = 810;
				end = 1010;
				break;

			default:
				break;
		}

		for (let i = start; i <= end; i++) {
			await this.loadPokemon(i);
		}
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
		pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

		/* const germanDescription = await this.fetchPokemonData(i); // Aufruf der neuen Funktion */

		this.setState((prevState) => ({
			allPokemons: [...prevState.allPokemons, pokemon],
		}));
	}

	/* Wird nicht genutzt */
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
				<StartLoadingscreen />
				<PokeModal
					show={this.state.showModal}
					handleClose={this.handleModalClose}
					pokemon={this.state.selectedPokemon}
					onNext={this.handleNext}
					onPrev={this.handlePrev}
					allPokemons={this.state.allPokemons}
				/>
				<Header onSelectGeneration={this.loadGeneration} />
				<Body
					pokemons={this.state.allPokemons}
					onPokemonSelect={this.handlePokemonSelect}
					onLoadMore={this.loadMorePokemon}
					canLoadMore={this.state.canLoadMore}
				/>
			</React.Fragment>
		);
	}
}

export default App;
