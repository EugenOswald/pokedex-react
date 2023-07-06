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
							disabled={this.state.isLoading}
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
									{Array.from({ length: 9 }, (_, i) => i + 1).map((gen) => (
										<Dropdown.Item onClick={this.props.onClick} eventKey={gen.toString()} key={gen}>
											{`Generation ${gen}`}
										</Dropdown.Item>
									))}
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
