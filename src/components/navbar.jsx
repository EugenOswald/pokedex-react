import React, { Component } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import pokedexIcon from '../imgs/pokedex-icon.png';

class NavbarComponent extends Component {
	state = {};
	render() {
		return (
			<Navbar className='col-12 col-md-6 py-4'>
				<Container className='justify-content-center'>
					<Row>
						<Col xs={6} className='d-flex align-items-center text-center'>
							<img src={pokedexIcon} alt='' style={{ width: '3rem', height: '3rem' }} className='me-4' />
							<Navbar.Brand className='mb-0 h1 fs-1' style={{ fontFamily: 'Baloo Regular' }}>
								Pokedex
							</Navbar.Brand>
						</Col>
					</Row>
				</Container>
			</Navbar>
		);
	}
}

export default NavbarComponent;
