import './TableBookStyles.scss';

import TableDetailsForm from '../components/TableBook/TableDetailsForm';
import DinerDetailsForm from '../components/TableBook/DinerDetailsForm';
import PageTitle from '../components/PageTitle';

function TableBook(props) {
	return (
		<section className="table-booking-page wrapper">
			<PageTitle> Book a Table </PageTitle>

			{/* <TableDetailsForm></TableDetailsForm> */}
			<DinerDetailsForm></DinerDetailsForm>
		</section>
	);
}

export default TableBook;
