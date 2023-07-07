import React, { Component } from 'react';
import { Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

class Dropdownmenu extends Component {
	state = {};

	handleSelect = (generation) => {
		this.props.onSelectGeneration(generation);
	};

	render() {
		return (
			<Row className='col-12 col-md-6 '>
				<Col className='d-flex align-items-center justify-content-end justify-content-md-center '>
					<DropdownButton
						disabled={this.state.isLoading}
						onClick={this.handleClick}
						variant='outline-secondary'
						title={'Open'}
						id='input-group-dropdown-2'
						onSelect={this.handleSelect}
					>
						<Dropdown.Item onClick={this.props.onClick} eventKey='1'>
							Generation 1
						</Dropdown.Item>
						<Dropdown.Item onClick={this.props.onClick} eventKey='2'>
							Generation 2
						</Dropdown.Item>
						<Dropdown.Item onClick={this.props.onClick} eventKey='3'>
							Generation 3
						</Dropdown.Item>
						<Dropdown.Item onClick={this.props.onClick} eventKey='4'>
							Generation 4
						</Dropdown.Item>
						<Dropdown.Item onClick={this.props.onClick} eventKey='5'>
							Generation 5
						</Dropdown.Item>
						<Dropdown.Item onClick={this.props.onClick} eventKey='6'>
							Generation 6
						</Dropdown.Item>
						<Dropdown.Item onClick={this.props.onClick} eventKey='7'>
							Generation 7
						</Dropdown.Item>
						<Dropdown.Item onClick={this.props.onClick} eventKey='8'>
							Generation 8
						</Dropdown.Item>
						<Dropdown.Item onClick={this.props.onClick} eventKey='9'>
							Generation 9
						</Dropdown.Item>
					</DropdownButton>
				</Col>
			</Row>
		);
	}
}

export default Dropdownmenu;
