import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0
	};

	render() {
		return (
			<div className='pt-4'>
				<span
					className={this.getClasses()}
					style={{ fontWeight: 'bold' }}
				>
					{this.formatCount()}
				</span>

				<button className='btn btn-primary btn-sm'>Increment</button>
			</div>
		);
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}

	getClasses() {
		let classes = 'badge m-2 badge-';
		return (classes += this.state.count === 0 ? 'danger' : 'info');
	}
}

export default Counter;
