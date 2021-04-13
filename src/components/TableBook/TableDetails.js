import { useState, useContext } from 'react';

import { TableBookContext } from '../../contexts/TableBookContext';

import DetailsInput from './DetailsInput';
import SectionTitle from './SectionTitle';
import CountControl from '../CountControl';

export default function TableDetails() {
	const { updateTableDetails } = useContext(TableBookContext);

	const [dinersCount, setDinersCount] = useState(1);
	const [dineDate, setDineDate] = useState('');
	const [dineTime, setDineTime] = useState('');

	const requiredFieldsFilled = [dinersCount, dineDate, dineTime].every(
		field => field
	);

	const handleAvailabilityCheck = e => {
		e.preventDefault();

		if (requiredFieldsFilled) {
			updateTableDetails({ dinersCount, dineDate, dineTime });
			console.log();
		} else {
			alert('Please fill in the details');
		}
	};

	return (
		<form className="table-details details-input">
			<SectionTitle>
				<span className="detail-type">1</span> Table Details
			</SectionTitle>
			<DetailsInput>
				<span className="input-type">Number of Diners</span>
				<CountControl controller={setDinersCount}>{dinersCount}</CountControl>
			</DetailsInput>
			<DetailsInput>
				<span className="input-type">Date</span>
				<input
					type="date"
					required
					value={dineDate}
					onChange={e => setDineDate(e.target.value)}
				/>
			</DetailsInput>
			<DetailsInput>
				<span className="input-type">Time</span>
				<input
					type="time"
					required
					value={dineTime}
					onChange={e => setDineTime(e.target.value)}
				/>
			</DetailsInput>
			<button className="btn" onClick={handleAvailabilityCheck}>
				Check Availability
			</button>
		</form>
	);
}
