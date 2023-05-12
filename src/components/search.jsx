import React, { Component } from 'react';

class Search extends Component {
	state = {};
	render() {
		return (
			<div className='row justify-content-center'>
				<div className='col-md-6 col-lg-5 col-xl-4'>
					<div className='input-group mb-4'>
						<input type='text' className='form-control' aria-label='Text input with dropdown button' placeholder='Name or ID' />
						<button
							className='btn btn-outline-secondary dropdown-toggle'
							type='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						>
							Open
						</button>
						<ul className='dropdown-menu dropdown-menu-end'>
							<li>
								<span className='dropdown-item'>All</span>
							</li>
							<li>
								<span className='dropdown-item'>Generation 1</span>
							</li>
							<li>
								<span className='dropdown-item'>Generation 2</span>
							</li>
							<li>
								<span className='dropdown-item'>Generation 3</span>
							</li>
							<li>
								<span className='dropdown-item'>Generation 4</span>
							</li>
							<li>
								<span className='dropdown-item'>Generation 5</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;
