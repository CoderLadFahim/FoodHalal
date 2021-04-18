import { useState } from 'react';

import DetailsInput from './DetailsInput';
import SectionTitle from './SectionTitle';
import CountControl from '../CountControl';
import FormButton from '../FormButton';

function TableDetailsForm({ tableDetailsSetter }) {
	const [dinersCount, setDinersCount] = useState(1);
	const [dineDate, setDineDate] = useState('');
	const [dineTime, setDineTime] = useState('');

	// checks if the local states have been filled (used to disable the availability checkerBtn)
	const requiredFieldsFilled = [dinersCount, dineDate, dineTime].every(
		field => field
	);

	const handleClick = e => {
		e.preventDefault();
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

			<FormButton
				btnDisabler={!requiredFieldsFilled}
				clickHandler={handleClick}
			>
				Check Availability{' '}
			</FormButton>
		</form>
	);
}

export default TableDetailsForm;
