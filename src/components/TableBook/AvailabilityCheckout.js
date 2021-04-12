import { useState } from 'react';
import './AvailabilityCheckoutStyles.scss';

export default function AvailabilityCheckout({ availabilityState }) {
	const [showEditBtnBool, setShowEditBtnBool] = useState(true);

	const availabilityMsg = (
		<div className="avalability-msg">
			<h1>Table {availabilityState ? 'not' : ''} Available</h1>
		</div>
	);

	const editBtn = (
		<button
			className="btn"
			onMouseOver={setShowEditBtnBool(prevState => !prevState)}
			onMouseOut={setShowEditBtnBool(prevState => !prevState)}
		>
			{' '}
			Edit Details{' '}
		</button>
	);

	const elementToShow = showEditBtnBool ? editBtn : availabilityMsg;

	return elementToShow;
}
