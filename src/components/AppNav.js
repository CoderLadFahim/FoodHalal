import { NavLink } from 'react-router-dom';
import './AppNav.scss';

function NavBar() {
	return (
		<nav>
			<ul className="wrapper">
				<li className="route-link">
					<NavLink activeClassName="active-link" to="/">
						Home
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

			<ul className="hamburger">
				<li className="line"></li>
				<li className="line"></li>
				<li className="line"></li>
			</ul>
		</nav>
	);
}

export default NavBar;
