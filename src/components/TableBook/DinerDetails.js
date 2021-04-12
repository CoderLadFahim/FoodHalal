import { useState } from 'react';
import './DinerDetailsStyles.scss';

import SectionTitle from './SectionTitle';
import AppInput from '../AppInput';
import FormButton from '../FormButton.js';

export default function DinerDetails() {
	const [name, setName] = useState('');
	const [cell, setCell] = useState('');
	const [email, setEmail] = useState('');

	return (
		<form className="diner-details details-input">
			<SectionTitle>
				<span className="detail-type">2</span> Diner Details
			</SectionTitle>

			<AppInput content={name} contentSetter={setName}>
				Main Diner Name
			</AppInput>
			<AppInput type="number" content={cell} contentSetter={setCell}>
				Main Diner Cell
			</AppInput>
			<AppInput content={email} contentSetter={setEmail}>
				Main Diner Email (optional)
			</AppInput>
			<button className="btn"> Confirm Table </button>
		</form>
	);
}
