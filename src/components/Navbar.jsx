import React, { Component } from 'react';

class Navbar extends Component {
	state = {};
	render() {
		return (
			<nav className='navbar navbar-dark bg-dark'>
				<a href='nothing.com' className='navbar-brand'>
					Total Count: {this.props.totalCounters}
				</a>
			</nav>
		);
	}
}

export default Navbar;
