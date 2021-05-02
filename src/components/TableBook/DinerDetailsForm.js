import { useState } from 'react';
import './DinerDetailsFormStyles.scss';

import SectionTitle from './SectionTitle';
import AppInput from '../AppInput';
import FormButton from '../FormButton';

function DinerDetails({ dinerDetailsSetter, tableReadyStatusSetter }) {
	const [dinerName, setName] = useState('');
	const [dinerCell, setCell] = useState('');

	// checks if the local states have been filled (used to disable the availability checkerBtn)
	const requiredFieldsFilled = [dinerName, dinerCell].every(field => field);

	const handleClick = (e, submission) => {
		e.preventDefault();
		// is user clicks the 'go back' btn, TableDetails gets rendered
		if (!submission) return tableReadyStatusSetter(false);

		// else dinerDetails gets sent to the parent
		dinerDetailsSetter({
			dinerName,
			dinerCell,
		});
	};

	return (
		<form className="diner-details details-input">
			<SectionTitle>
				<span className="detail-type">2</span> Diner Details
			</SectionTitle>
			{/*  passing is the attributed to the custom input component */}
			<AppInput
				attrs={{
					type: 'text',
					name: 'dinerName',
					// requiredStatus: true,
					required: true,
				}}
				content={dinerName}
				contentSetter={setName}
			>
				Main Diner Name
			</AppInput>
			<AppInput
				attrs={{
					type: 'number',
					name: 'dinerCell',
					// requiredStatus: true,
					required: true,
				}}
				content={dinerCell}
				contentSetter={setCell}
			>
				Main Diner Cell
			</AppInput>

			{/* this button triggers submission */}
			<FormButton
				btnDisabler={!requiredFieldsFilled}
				clickHandler={e => handleClick(e, true)}
			>
				Confirm Table
			</FormButton>
			{/* the go back button */}
			<button
				className="btn btn-secondary"
				onClick={e => handleClick(e, false)}
			>
				{' '}
				Go Back{' '}
			</button>
		</form>
	);
}

export default DinerDetails;
