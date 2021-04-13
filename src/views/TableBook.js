import { useContext } from 'react';
import './TableBookStyles.scss';

import PageTitle from '../components/PageTitle';
import TableDetailsForm from '../components/TableBook/TableDetailsForm';
import DinerDetailsForm from '../components/TableBook/DinerDetailsForm';
import FormSubmissionView from '../components/FormSubmissionView';

import { TableBookContext } from '../contexts/TableBookContext';

function TableBook(props) {
	const { tableDetails, dinerDetails, resetFields } = useContext(
		TableBookContext
	);

	// this boolean triggers the forms and the FormSubmissionView
	const fieldsEmpty = ![
		...Object.values(tableDetails),
		...Object.values(dinerDetails),
	].every(field => field);

	// this hides the DinerDetails if TableDetails is not filled properly
	const tableDetailsFilled = Object.values(tableDetails).every(field => field);

	return (
		<section className="table-booking-page wrapper">
			<PageTitle> Book a Table </PageTitle>
			{/* Showing the forms if fields are empty, else FormSubmissionView is being rendered*/}
			{fieldsEmpty ? (
				<div className="detail-input-forms">
					<TableDetailsForm></TableDetailsForm>
					{/* DinerDetailsForm is rendered only when user fills in the TableDetails */}
					{tableDetailsFilled && <DinerDetailsForm></DinerDetailsForm>}
				</div>
			) : (
				<FormSubmissionView clickHandler={resetFields} />
			)}
		</section>
	);
}

export default TableBook;
