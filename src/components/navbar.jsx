import React, { Component } from 'react'

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
			<nav className='navbar navbar-light bg-light'>
				<div className='container-fluid'>
					<span className='navbar-brand mb-0 h1'>Navbar</span>
				</div>
			</nav>
		);
    }
}
 
export default Navbar;