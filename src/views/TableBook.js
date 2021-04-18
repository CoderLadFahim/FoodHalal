import { useState } from 'react';
import './TableBookStyles.scss';

import PageTitle from '../components/PageTitle';
import TableDetailsForm from '../components/TableBook/TableDetailsForm';
import DinerDetailsForm from '../components/TableBook/DinerDetailsForm';
import FormSubmissionView from '../components/FormSubmissionView';

function TableBook(props) {
	const [tableDetails, setTableDetails] = useState({
		dinersCount: 1,
		dineDate: '',
		dineTime: '',
	});
	const [dinerDetails, setDinerDetails] = useState({
		dinerName: '',
		dinerCell: '',
		dinerEmail: '',
	});
	const resetFields = () => {
		setTableDetails(
			prevState => (prevState = { dinersCount: 1, dineDate: '', dineTime: '' })
		);
		setDinerDetails(
			prevState =>
				(prevState = { dinerName: '', dinerCell: '', dinerEmail: '' })
		);
	};

	const [tableReadyState, setTableReadyState] = useState(false);

	// this boolean triggers the forms and the FormSubmissionView
	const fieldsEmpty = ![
		...Object.values(tableDetails),
		...Object.values(dinerDetails),
	].every(field => field);

	return (
		<section className="table-booking-page wrapper">
			<PageTitle> Book a Table </PageTitle>
			{/* Showing the forms if fields are empty, else FormSubmissionView is being rendered*/}
			{fieldsEmpty ? (
				<div className="detail-input-forms">
					{!tableReadyState ? (
						<TableDetailsForm
							tableDetailsSetter={setTableDetails}
							tableReadyStatusSetter={setTableReadyState}
						></TableDetailsForm>
					) : (
						<DinerDetailsForm></DinerDetailsForm>
					)}
				</div>
			) : (
				<FormSubmissionView clickHandler={resetFields} />
			)}
		</section>
	);
}

export default TableBook;
