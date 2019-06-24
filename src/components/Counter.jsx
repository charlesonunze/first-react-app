import React from 'react';

const Counter = ({ id, value, onIncrement, onDelete }) => (
	<div>
		<span
			className={getClasses(value)}
			style={{ fontWeight: 'bold' }}
		>
			{formatValue(value)}
		</span>

		<button
			onClick={() => onIncrement(id)}
			className='btn btn-primary btn-sm'
		>
			Increment
		</button>

		<button
			onClick={() => onDelete(id)}
			className='btn btn-danger btn-sm m-2'
		>
			Delete
		</button>
	</div>
);

function formatValue(value) {
	return value === 0 ? 'Zero' : value;
}

function getClasses(value) {
	let classes = 'badge m-2 badge-';
	return (classes += value === 0 ? 'danger' : 'info');
}

export default Counter;
