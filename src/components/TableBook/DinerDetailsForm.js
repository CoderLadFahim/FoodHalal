import { useState, useContext } from 'react';
import './DinerDetailsFormStyles.scss';

import SectionTitle from './SectionTitle';
import AppInput from '../AppInput';

function DinerDetails() {
	const [dinerName, setName] = useState('');
	const [dinerCell, setCell] = useState('');
	const [dinerEmail, setEmail] = useState('');

	// checks if the local states have been filled (used to disable the availability checkerBtn)
	const requiredFieldsFilled = [dinerName, dinerCell, dinerEmail].every(
		field => field
	);

	// checks to see if the Context's DinerDetails have been filled (used to show appropriate availability checkerBtn text and shows the table availability status)
	const requiredFieldsAdded = [dinerName, dinerCell].every(field => field);

	const handleClick = e => {
		e.preventDefault();
	};

	return (
		<form className="diner-details details-input">
			<SectionTitle>
				<span className="detail-type">2</span> Diner Details
			</SectionTitle>

			<AppInput content={dinerName} contentSetter={setName}>
				Main Diner Name
			</AppInput>
			<AppInput type="number" content={dinerCell} contentSetter={setCell}>
				Main Diner Cell
			</AppInput>
			<AppInput content={dinerEmail} contentSetter={setEmail}>
				Main Diner Email
			</AppInput>
			<button className="btn" onClick={handleClick}>
				{' '}
				Confirm Table{' '}
			</button>
		</form>
	);
}

export default DinerDetails;
