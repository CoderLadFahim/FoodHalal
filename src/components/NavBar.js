import { Link } from 'react-router-dom';
import './NavBarStyles.scss';

function NavBar() {
	return (
		<nav>
			<ul className="wrapper">
				<li className="home-link logo-grad">
					<Link to="/">
						<h1>FH</h1>
					</Link>
				</li>
				<li>
					<Link to="/menu">Menu</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
