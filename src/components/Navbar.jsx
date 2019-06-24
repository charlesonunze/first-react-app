import React from 'react';

const Navbar = ({ totalCounters }) => (
	<nav className='navbar navbar-dark bg-dark'>
		<a href='nothing.com' className='navbar-brand'>
			Total Count: {totalCounters}
		</a>
	</nav>
);

export default Navbar;
