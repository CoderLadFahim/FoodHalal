import { useState, useContext } from 'react';

import { TableBookContext } from '../../contexts/TableBookContext';

import DetailsInput from './DetailsInput';
import SectionTitle from './SectionTitle';
import CountControl from '../CountControl';

function TableDetailsForm() {
	// getting only the tableDetails and its setter from the TableBookContext
	const { updateTableDetails, tableDetails } = useContext(TableBookContext);

	const [dinersCount, setDinersCount] = useState(1);
	const [dineDate, setDineDate] = useState('');
	const [dineTime, setDineTime] = useState('');

	// checks if the local states have been filled (used to disable the availability checkerBtn)
	const requiredFieldsFilled = [dinersCount, dineDate, dineTime].every(
		field => field
	);

	// checks to see if the Context's TableDetails have been filled (used to show appropriate availability checkerBtn text and shows the table availability status)
	const requiredFieldsAdded = Object.values(tableDetails).every(field => field);

	const handleClick = e => {
		e.preventDefault();

		// setting the TableDetails of the TableBook context and handling empty details input
		if (requiredFieldsFilled) {
			// checking if TableDetails from the context haven't already been set, resetting if they have (local state remains)
			if (!requiredFieldsAdded) {
				updateTableDetails({ dinersCount, dineDate, dineTime });
			} else updateTableDetails({ dinersCount: 1, dineDate: '', dineTime: '' });
		} else alert('Please fill in the details');
	};

	return (
		<form className="table-details details-input">
			<SectionTitle>
				<span className="detail-type">1</span> Table Details
			</SectionTitle>
			<DetailsInput>
				<span className="input-type">Number of Diners</span>
				{/* CountControl component being used to set the number of diners, takes in the count and the count setter */}
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

			{/* Showing availability status and appropriate checkerBtn text */}

			{requiredFieldsAdded && (
				<p className="availability-status">Table Available!</p>
			)}

			<button className="btn" onClick={handleClick}>
				{!requiredFieldsAdded ? 'Check Availability' : 'Edit Details'}
			</button>
		</form>
	);
}

export default TableDetailsForm;
