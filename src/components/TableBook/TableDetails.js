import { useState, useContext } from 'react';

import DetailsInput from './DetailsInput';
import SectionTitle from './SectionTitle';
import CountControl from '../CountControl';
// import AvailabilityCheckout from './AvailabilityCheckout';

export default function TableDetails() {
	const [dinersCount, setDinersCount] = useState(1);
	const [dineDate, setDineDate] = useState('');
	const [dineTime, setDineTime] = useState('');

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
			<button className="btn">Check Availability</button>
			||
			{/* <AvailabilityCheckout /> */}
		</form>
	);
}
