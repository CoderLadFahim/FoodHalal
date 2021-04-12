import './TableBookStyles.scss';

import TableDetails from '../components/TableBook/TableDetails';
import DinerDetails from '../components/TableBook/DinerDetails';
import PageTitle from '../components/PageTitle';

function TableBook(props) {
	return (
		<section className="table-booking-page wrapper">
			<PageTitle> Book a Table </PageTitle>

			<TableDetails></TableDetails>
		</section>
	);
}

export default TableBook;
