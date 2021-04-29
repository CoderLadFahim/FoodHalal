import './OrderFormStyles.scss';
import { useState } from 'react';
import AppInput from '../AppInput';
import FormButton from '../FormButton';

function OrderForm({ userOrderingStateChanger }) {
	const [customerName, setCustomerName] = useState('');
	const [customerAddress, setCustomerAddress] = useState('');
	const [customerCell, setCustomerCell] = useState('');

	const requiredFieldsFilled = [
		customerName,
		customerAddress,
		customerCell,
	].every(field => field);

	return (
		<div className="order-form">
			<h4>*Please fill in the details*</h4>

			<AppInput content={customerName} contentSetter={setCustomerName}>
				Customer Name
			</AppInput>
			<AppInput content={customerAddress} contentSetter={setCustomerAddress}>
				Address
			</AppInput>
			<AppInput content={customerCell} contentSetter={setCustomerCell}>
				Phone
			</AppInput>

			<FormButton btnDisabler={!requiredFieldsFilled}>Confirm Order</FormButton>
			<button onClick={userOrderingStateChanger}>Cancel</button>
		</div>
	);
}

export default OrderForm;
