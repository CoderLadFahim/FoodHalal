import { useState, useEffect } from 'react';
import TweenLite from 'gsap';
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

	// this boolean value toggles the two forms
	const [tableReadyState, setTableReadyState] = useState(false);

	// this boolean triggers the forms and the FormSubmissionView
	const fieldsEmpty = ![
		...Object.values(tableDetails),
		...Object.values(dinerDetails),
	].every(field => field);

	useEffect(() => {
		const tableBookTL = TweenLite.timeline({ delay: 1 });

		tableBookTL.from('.details-input > *', {
			duration: 1,
			yPercent: -100,
			opacity: 0,
			stagger: 0.1,
			ease: 'power1.out',
		});
	}, []);

	return (
		<section className="table-booking-page wrapper">
			<PageTitle> Book a table </PageTitle>
			{/* Showing the forms if fields are empty, else FormSubmissionView is being rendered*/}
			{fieldsEmpty ? (
				<div className="detail-input-forms">
					{!tableReadyState ? (
						<TableDetailsForm
							tableDetailsSetter={setTableDetails}
							tableReadyStatusSetter={setTableReadyState}
						></TableDetailsForm>
					) : (
						<DinerDetailsForm
							dinerDetailsSetter={setDinerDetails}
							tableReadyStatusSetter={setTableReadyState}
						></DinerDetailsForm>
					)}
				</div>
			) : (
				<FormSubmissionView
					clickHandler={() => {
						// resetting everything to go back to table details
						resetFields();
						setTableReadyState(false);
					}}
				/>
			)}
		</section>
	);
}

export default TableBook;
