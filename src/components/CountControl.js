import { useState } from 'react';

export default function CountControl({ controller, children }) {
	const updateCount = e => {
		e.preventDefault();

		e.target.textContent === '+'
			? controller(prevCount => prevCount + 1)
			: children > 1 && controller(prevCount => prevCount - 1);
	};

	return (
		<div className="count-control">
			<button className="add" onClick={updateCount}>
				+
			</button>
			<p className="diners-count">{children}</p>
			<button className="subtract" onClick={updateCount}>
				-
			</button>
		</div>
	);
}
