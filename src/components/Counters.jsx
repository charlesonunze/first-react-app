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
	render() {
		return (
			<>
				{this.state.counters.map(counter => (
					<Counter key={counter.id} value={counter.value} />
				))}
			</>
		);
	}
}

export default Counters;
