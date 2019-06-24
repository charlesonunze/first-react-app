import React, { Component } from 'react';

class Counter extends Component {
	// Update Phase - Second Life Cycle Method
	componentDidUpdate(prevProps, prevState) {
		console.log('prevProps', prevProps);
		console.log('prevState', prevState);
		console.log('Counter - Updated!');
	}

	// Mount Phase - Third Life Cycle Method
	componentDidMount() {
		console.log('Counter - Mounted!');
	}

	// Mount Phase - Second Life Cycle Method
	// Update Phase - First Life Cycle Method
	render() {
		console.log('Counter - Rendered!');

		const { id, value, onIncrement, onDelete } = this.props;
		return (
			<div>
				<span
					className={this.getClasses(value)}
					style={{ fontWeight: 'bold' }}
				>
					{this.formatValue(value)}
				</span>

				<button
					onClick={() => onIncrement(id)}
					className='btn btn-primary btn-sm'
				>
					Increment
				</button>

				<button
					onClick={() => onDelete(id)}
					className='btn btn-danger btn-sm m-2'
				>
					Delete
				</button>
			</div>
		);
	}

	formatValue(value) {
		return value === 0 ? 'Zero' : value;
	}

	getClasses(value) {
		let classes = 'badge m-2 badge-';
		return (classes += value === 0 ? 'danger' : 'info');
	}
}

export default Counter;
