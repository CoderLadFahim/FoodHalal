function TableAvailabilityDisplay({ tableAvailability }) {
	const statusClass = `${!tableAvailability ? 'unavailable' : 'available'}`;

	return (
		<p className={statusClass}>
			{`Table ${!tableAvailability ? 'Unavailable' : 'Availabile!'}`}
		</p>
	);
}

export default TableAvailabilityDisplay;
