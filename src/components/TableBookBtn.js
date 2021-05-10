import './TableBookBtnStyles.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function TableBookBtn() {
	return (
		<Link to="/book">
			<button className="btn table-book-btn">
				<span className="btn-text"> BOOK A TABLE </span>
				<FontAwesomeIcon className="arrow-right" icon={faArrowRight} />
			</button>
		</Link>
	);
}

export default TableBookBtn;
