import React, { Component } from 'react';
import { Row, Col, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';

class Search extends Component {
	state = {};
	render() {
		return (
			<Row className='justify-content-center'>
				<Col md={6} lg={5} xl={4}>
					<InputGroup className='mb-4'>
						<FormControl aria-label='Text input with dropdown button' placeholder='Name or ID' />
						<DropdownButton as={InputGroup.Append} variant='outline-secondary' title='Open' id='input-group-dropdown-2'>
							<Dropdown.Item href='#'>All</Dropdown.Item>
							<Dropdown.Item href='#'>Generation 1</Dropdown.Item>
							<Dropdown.Item href='#'>Generation 2</Dropdown.Item>
							<Dropdown.Item href='#'>Generation 3</Dropdown.Item>
							<Dropdown.Item href='#'>Generation 4</Dropdown.Item>
							<Dropdown.Item href='#'>Generation 5</Dropdown.Item>
						</DropdownButton>
					</InputGroup>
				</Col>
			</Row>
		);
	}
}

export default Search;
