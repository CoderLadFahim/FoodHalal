import { useState } from 'react';

import DetailsInput from './DetailsInput';
import SectionTitle from './SectionTitle';
import AvailabilityCheckout from './AvailabilityCheckout';

export default function TableDetails() {
	return (
		<section className="table-details details-input">
			<SectionTitle>
				<span className="detail-type">1</span> Table Details
			</SectionTitle>
			<DetailsInput>
				<span className="input-type">Number of Diners</span>
				<div className="diners-count-control">
					<button className="add">+</button>
					<p className="diners-count">1</p>
					<button className="subtract">-</button>
				</div>
			</DetailsInput>
			<DetailsInput>
				<span className="input-type">Date</span>
				<input type="date" />
			</DetailsInput>
			<DetailsInput>
				<span className="input-type">Time</span>
				<input type="time" />
			</DetailsInput>
			<button className="btn">Check Availability</button>
			||
			<AvailabilityCheckout />
		</section>
	);
}
