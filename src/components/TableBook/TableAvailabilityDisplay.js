function TableAvailabilityDisplay({ tableAvailability }) {
	const statusClass = `${!tableAvailability ? 'unavailable' : 'available'}`;

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
