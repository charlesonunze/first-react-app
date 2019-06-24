import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
	render() {
		return (
			<>
				<div className='text-center'>
					<button
						onClick={this.props.onReset}
						className='btn btn-primary btn-sm m-2'
					>
						Reset
					</button>

					{this.props.counters.map(counter => (
						<Counter
							id={counter.id}
							key={counter.id}
							value={counter.value}
							onDelete={this.props.onDelete}
							onIncrement={this.props.onIncrement}
						/>
					))}
				</div>
			</>
		);
	}
}

export default Counters;
