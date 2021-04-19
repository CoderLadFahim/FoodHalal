import { useState, useEffect } from 'react';

import DetailsInput from './DetailsInput';
import SectionTitle from './SectionTitle';
import TableAvailabilityDisplay from './TableAvailabilityDisplay';

import CountControl from '../CountControl';
import FormButton from '../FormButton';

function TableDetailsForm({ tableDetailsSetter, tableReadyStatusSetter }) {
	const [dinersCount, setDinersCount] = useState(1);
	const [dineDate, setDineDate] = useState('');
	const [dineTime, setDineTime] = useState('');

	// table availability status is initially set to null to not show the TableAvailabilityDisplay at all
	const [tableAvailabilityStatus, setTableAvailabilityStatus] = useState(null);

	// setting the table availability status to null every time the local states change (user tries to change table details)
	useEffect(() => setTableAvailabilityStatus(null), [
		dinersCount,
		dineDate,
		dineTime,
	]);

	// checks if the local states have been filled (used to disable the availability checker btn)
	const requiredFieldsFilled = [dinersCount, dineDate, dineTime].every(
		field => field
	);

	// resembling an api call by taking in the table details but returning a 50/50 boolean value
	const checkTableAvailability = tableDetails => Math.random() > 0.5;

	const handleClick = e => {
		e.preventDefault();

		// if the table is available, setting the tableReadyStatusState on the parent to be true, which renders the DinerDetailsForm
		if (tableAvailabilityStatus) return tableReadyStatusSetter(true);

		// calling our "api call" by passing in the local state
		const tableAvailable = checkTableAvailability({
			dinersCount,
			dineDate,
			dineTime,
		});

		if (!tableAvailable) {
			// setting the availability status to be false if "api call" returns false
			return setTableAvailabilityStatus(false);
		} else {
			// setting the availability status to be true and sending/setting the local state to the parent tableDetails state
			setTableAvailabilityStatus(true);
			tableDetailsSetter({
				dinersCount,
				dineDate,
				dineTime,
			});
		}
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

			{tableAvailabilityStatus !== null && (
				<TableAvailabilityDisplay tableAvailability={tableAvailabilityStatus} />
			)}

			<FormButton
				btnDisabler={!requiredFieldsFilled || tableAvailabilityStatus === false}
				clickHandler={handleClick}
			>
				{!tableAvailabilityStatus ? 'Check Availability' : 'Next'}
			</FormButton>
		</form>
	);
}

export default TableDetailsForm;
