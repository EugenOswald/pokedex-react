import React, { Component } from 'react';
import { Row, Col, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';

class Search extends Component {
	state = {
		isLoading: false,
	};

	handleSelect = (generation) => {
		this.props.onSelectGeneration(generation);
	};

	handleClick = async () => {
		this.setState({ isLoading: true });
		await this.props.onLoadMore();
		this.setState({ isLoading: false });
	};

	render() {
		return (
			<Row className='justify-content-center'>
				<Col md={6} lg={5} xl={4}>
					<InputGroup className='mb-4'>
						<FormControl aria-label='Text input with dropdown button' placeholder='Name or ID' />
						<DropdownButton
							disabled={this.state.isLoading || this.state.pokemonCount > 1010}
							onClick={this.handleClick}
							as={InputGroup.Append}
							variant='outline-secondary'
							title='Open'
							id='input-group-dropdown-2'
							onSelect={this.handleSelect}
						>
							{this.state.isLoading ? (
								'Loading…'
							) : (
								<>
									<Dropdown.Item eventKey='all'>All</Dropdown.Item>
									<Dropdown.Item eventKey='1'>Generation 1</Dropdown.Item>
									<Dropdown.Item eventKey='2'>Generation 2</Dropdown.Item>
									<Dropdown.Item eventKey='3'>Generation 3</Dropdown.Item>
									<Dropdown.Item eventKey='4'>Generation 4</Dropdown.Item>
									<Dropdown.Item eventKey='5'>Generation 5</Dropdown.Item>
									<Dropdown.Item eventKey='6'>Generation 6</Dropdown.Item>
									<Dropdown.Item eventKey='7'>Generation 7</Dropdown.Item>
									<Dropdown.Item eventKey='8'>Generation 8</Dropdown.Item>
								</>
							)}
						</DropdownButton>
					</InputGroup>
				</Col>
			</Row>
		);
	}
}

export default Search;
