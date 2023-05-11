import React, { Component } from 'react'

class Search extends Component {
    state = {  } 
    render() { 
        return (
			<div className='input-group mb-3'>
				<input type='text' className='form-control' aria-label='Text input with dropdown button' />
				<button className='btn btn-outline-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
					Generation
				</button>
				<ul className='dropdown-menu dropdown-menu-end'>
					<li>
						<a className='dropdown-item' href='/'>
							Generation 1
						</a>
					</li>
					<li>
						<a className='dropdown-item' href='#/'>
							Generation 2
						</a>
					</li>
					<li>
						<a className='dropdown-item' href='/'>
							Generation 3
						</a>
					</li>
					<li>
						<a className='dropdown-item' href='/'>
							Generation 4
						</a>
					</li>
					<li>
						<a className='dropdown-item' href='/'>
							Generation 4
						</a>
					</li>
				</ul>
			</div>
		);
    }
}
 
export default Search;