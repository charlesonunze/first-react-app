import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Counters from './components/Counters';

class App extends Component {
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
				<Navbar
					totalCounters={
						this.state.counters.filter(c => c.value > 0).length
					}
				/>

				<main className='container'>
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
					/>
				</main>
			</>
		);
	}
}

export default App;
