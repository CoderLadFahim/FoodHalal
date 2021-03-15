import { NavLink } from 'react-router-dom';
import './NavBarStyles.scss';

function NavBar() {
	return (
		<nav>
			<ul className="wrapper">
				<li className="home-link logo-grad">
					<NavLink activeClassName="active-link" to="/">
						<h1>FH</h1>
					</NavLink>
				</li>
				<li className="route-link">
					<NavLink activeClassName="active-link" to="/menu">
						Menu
					</NavLink>
				</li>
				<li className="route-link">
					<NavLink activeClassName="active-link" to="/contact">
						Contact
					</NavLink>
				</li>
				<li className="route-link">
					<NavLink activeClassName="active-link" to="/about">
						About
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
