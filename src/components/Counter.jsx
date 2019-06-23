import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0,
		tags: []
	};

	handleIncrement = product => {
		console.log(product);
		this.setState({ count: this.state.count + 1 });
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

				<button
					onClick={() =>
						this.handleIncrement({
							product_name: 'Macbook Pro',
							product_id: 123
						})
					}
					className='btn btn-primary btn-sm'
				>
					Increment
				</button>

				{/* {this.renderTags()}
				{this.state.tags.length < 1 && (
					<p>Please create a new tag!</p>
				)} */}
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

	renderTags() {
		if (this.state.tags.length < 1) return <p>There are no tags!</p>;
		return (
			<ul>
				{this.state.tags.map(tag => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		);
	}
}

export default Counter;
