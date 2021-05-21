import './NotFoundStyles.scss';
import { NavLink } from 'react-router-dom';

function NotFound() {
	return (
		<section className="not-found">
			<h1>404</h1>
			<p>Sorry, Page Not Found</p>
			<NavLink to="/">
				<button className="btn">Back to Home</button>
			</NavLink>
		</section>
	);
}

export default NotFound;
