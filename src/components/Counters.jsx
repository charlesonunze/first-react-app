import React from 'react';
import Counter from './Counter';

const Counters = ({ counters, onReset, onDelete, onIncrement }) => {
	console.log('Counters - Rendered!');

	return (
		<div className='text-center'>
			<button
				onClick={onReset}
				className='btn btn-primary btn-sm m-2'
			>
				Reset
			</button>

			{counters.map(counter => (
				<Counter
					id={counter.id}
					key={counter.id}
					value={counter.value}
					onDelete={onDelete}
					onIncrement={onIncrement}
				/>
			))}
		</div>
	);
};

export default Counters;
