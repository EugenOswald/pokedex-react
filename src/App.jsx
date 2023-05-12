import React, { Component } from 'react';
import Body from './components/body';
import Loadingscreen from './components/loadingscreen';
import PokeModal from './components/pokeModal';
import Header from './components/header';

class App extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Loadingscreen />
				<PokeModal />
				<Header />
				<Body />
			</React.Fragment>
		);
	}
}

export default App;
