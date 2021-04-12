import './TableBookStyles.scss';

import TableDetails from '../components/TableBook/TableDetails';
import DinerDetails from '../components/TableBook/DinerDetails';
import PageTitle from '../components/PageTitle';

function TableBook(props) {
	return (
		<form className="table-booking-page wrapper">
			<PageTitle> Book a Table </PageTitle>

			<DinerDetails></DinerDetails>
		</form>
	);
}

export default TableBook;
