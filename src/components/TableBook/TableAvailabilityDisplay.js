import './TableAvailabilityDisplayStyles.scss';

function TableAvailabilityDisplay({ tableAvailability }) {
	const statusClass = `table-availbility-status ${
		!tableAvailability ? 'unavailable' : 'available'
	}`;

	return (
		<p className={statusClass}>
			{`Table ${
				!tableAvailability
					? 'Unavailable, try changing your details'
					: 'Availabile!'
			}`}
		</p>
	);
}

export default TableAvailabilityDisplay;
