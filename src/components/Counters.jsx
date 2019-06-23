import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 10 },
			{ id: 2, value: 100 },
			{ id: 3, value: 1000 }
		]
	};

	handleDelete = id => {
		const counters = this.state.counters.filter(
			counter => counter.id !== id
		);
		this.setState({ counters });
	};

	render() {
		return (
			<>
				{this.state.counters.map(counter => (
					<Counter
						id={counter.id}
						key={counter.id}
						value={counter.value}
						onDelete={this.handleDelete}
					/>
				))}
			</>
		);
	}
}

export default Counters;
