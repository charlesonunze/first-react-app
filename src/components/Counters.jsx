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

	handleIncrement = id => {
		const counters = this.state.counters.map(counter => {
			if (counter.id === id) counter.value++;
			return counter;
		});
		this.setState({ counters });
	};

	handleReset = () => {
		let counters = this.state.counters.map(counter => ({
			id: counter.id,
			value: 0
		}));
		this.setState({ counters });
	};

	render() {
		return (
			<>
				<div className='text-center'>
					<button
						onClick={this.handleReset}
						className='btn btn-primary btn-sm m-2'
					>
						Reset
					</button>

					{this.state.counters.map(counter => (
						<Counter
							id={counter.id}
							key={counter.id}
							value={counter.value}
							onDelete={this.handleDelete}
							onIncrement={this.handleIncrement}
						/>
					))}
				</div>
			</>
		);
	}
}

export default Counters;
