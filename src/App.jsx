import React, { Component } from 'react';
import Body from './components/body';
import StartLoadingscreen from './components/startLoadingscreen';
import PokeModal from './components/pokeModal';
import Header from './components/header';
import Startpage from './components/startpage';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleNavbarClick = this.handleNavbarClick.bind(this);
	}

	state = {
		allPokemons: [],
		selectedPokemon: null,
		selectedPokemonIndex: 0,
		showModal: false,
		canLoadMore: true,
		isLoading: false,
		firstLoad: true,
		generationStart: 0,
		generationEnd: 0,
	};

	handlePokemonSelect = (pokemon) => {
		const index = this.state.allPokemons.findIndex((p) => p.name === pokemon.name);
		this.setState({ selectedPokemon: pokemon, selectedPokemonIndex: index, showModal: true });
	};

	handleModalClose = () => {
		this.setState({ showModal: false });
	};

	loadMorePokemon = async () => {
		this.setState({ isLoading: true });
		if (this.state.allPokemons.length < 1010) {
			let lastLoadedPokemonId = this.state.allPokemons[this.state.allPokemons.length - 1].id;
			let nextPokemonId = lastLoadedPokemonId + 1;
			for (let i = nextPokemonId; i < nextPokemonId + 30 && i <= 1010; i++) {
				await this.loadPokemon(i);
			}
			lastLoadedPokemonId = this.state.allPokemons[this.state.allPokemons.length - 1].id;
			this.setState({ canLoadMore: lastLoadedPokemonId < 1010 });
		}
		this.setState({ isLoading: false });
	};

	loadGeneration = async (generation) => {
		this.setState({ isLoading: true, allPokemons: [] });

		let start = 0;
		let end = 0;
		switch (generation) {
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
				end = 905;
				break;
			case '9':
				start = 906;
				end = 1010;
				break;

			default:
				break;
		}

		this.setState({ generationStart: start, generationEnd: end });

		for (let i = start; i <= end; i++) {
			await this.loadPokemon(i);
		}
		this.setState({ isLoading: false });
	};

	calculateProgress = () => {
		const { allPokemons, generationStart, generationEnd } = this.state;
		const total = generationEnd - generationStart + 1;
		const progress = (allPokemons.length / total) * 100;
		return progress;
	};

	async componentDidMount() {
		await this.init();
	}

	async init() {
		if ({ firstLoad: true }) {
			this.fistLoad = false;
			alert('The page is still under construction | 21.05.2023');
		}
		for (let i = 1; i <= 20; i++) {
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

	handleNavbarClick = () => {
		this.setState({ firstLoad: false });
	};

	render() {
		const progress = this.calculateProgress();
		return (
			<React.Fragment>
				<StartLoadingscreen isLoading={this.state.isLoading} progress={progress}/>
				<PokeModal
					show={this.state.showModal}
					handleClose={this.handleModalClose}
					pokemon={this.state.selectedPokemon}
					onNext={this.handleNext}
					onPrev={this.handlePrev}
					allPokemons={this.state.allPokemons}
				/>
				<Header firstLoad={this.state.firstLoad} onClick={this.handleNavbarClick} onSelectGeneration={this.loadGeneration} />
				{this.state.firstLoad ? (
					<Startpage />
				) : (
					<Body
						pokemons={this.state.allPokemons}
						onPokemonSelect={this.handlePokemonSelect}
						onLoadMore={this.loadMorePokemon}
						canLoadMore={this.state.canLoadMore}
					/>
				)}
			</React.Fragment>
		);
	}
}

export default App;
