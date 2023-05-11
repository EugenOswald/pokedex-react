import React, { Component } from 'react';
import Navbar from './components/navbar';
import Search from './components/search';
import Body from './components/body';
import Loadingscreen from './components/loadingscreen';
import PokeModal from './components/pokeModal';

class App extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
                <Loadingscreen />
                <PokeModal />
				<Navbar />
                <Search />
                <Body />
			</React.Fragment>
		);
	}
}

export default App;
