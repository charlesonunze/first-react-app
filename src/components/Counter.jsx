import React, { Component } from 'react';

class Counter extends Component {
	state = {
		value: this.props.value,
		tags: []
	};

	handleIncrement = product => {
		console.log(product);
		this.setState({ value: this.state.value + 1 });
	};

	render() {
		return (
			<div className='pt-4'>
				<span
					className={this.getClasses()}
					style={{ fontWeight: 'bold' }}
				>
					{this.formatValue()}
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

				<button
					onClick={() => this.props.onDelete(this.props.id)}
					className='btn btn-danger btn-sm m-2'
				>
					Delete
				</button>

				{/* {this.renderTags()}
				{this.state.tags.length < 1 && (
					<p>Please create a new tag!</p>
				)} */}
			</div>
		);
	}

	formatValue() {
		const { value } = this.state;
		return value === 0 ? 'Zero' : value;
	}

	getClasses() {
		let classes = 'badge m-2 badge-';
		return (classes += this.state.value === 0 ? 'danger' : 'info');
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
