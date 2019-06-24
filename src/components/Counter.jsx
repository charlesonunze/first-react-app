import React, { Component } from 'react';

class Counter extends Component {
	render() {
		return (
			<div>
				<span
					className={this.getClasses()}
					style={{ fontWeight: 'bold' }}
				>
					{this.formatValue()}
				</span>

				<button
					onClick={() => this.props.onIncrement(this.props.id)}
					className='btn btn-primary btn-sm'
				>
					Increment
				</button>

				<button
					onClick={() => this.props.onDelete(this.props.id)}
					className='btn btn-danger btn-sm m-2'
				>
					Delete
				</button>
			</div>
		);
	}

	formatValue() {
		const { value } = this.props;
		return value === 0 ? 'Zero' : value;
	}

	getClasses() {
		let classes = 'badge m-2 badge-';
		return (classes += this.props.value === 0 ? 'danger' : 'info');
	}
}

export default Counter;
