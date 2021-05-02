import './CountControlStyles.scss';

function CountControl({ decrementor, incrementor, children }) {
	const updateCount = e => {
		e.preventDefault?.();

		e.target.textContent === '+'
			? incrementor()
			: children > 1 && decrementor();
	};

	return (
		<div className="count-control">
			<button className="add" onClick={updateCount}>
				+
			</button>
			<p className="count-display">{children}</p>
			<button className="subtract" onClick={updateCount}>
				-
			</button>
		</div>
	);
}

export default CountControl;
