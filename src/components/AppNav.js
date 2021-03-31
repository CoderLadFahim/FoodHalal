import TweenLite from 'gsap';

import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import './AppNavStyles.scss';

function NavBar({ navToggler, navToggleState }) {
	useEffect(() => {
		// animates only on mobile when the hamburger menu is clicked adding the 'mobile-show' class
		const navTimeline = TweenLite.timeline();

		navTimeline.from('.mobile-show .route-link', {
			duration: 1,
			yPercent: -100,
			opacity: 0,
			scale: 0,
			stagger: 0.1,
			ease: 'elastic.out',
		});
	}, [navToggleState]);

	let navClass = navToggleState ? 'mobile-show' : 'mobile-hide';

	// this function is getting the NavLink className and toggling the AppNav
	const handleLinkClick = ({
		target: {
			parentElement: { className },
		},
	}) => {
		className === 'route-link' && navToggler();
	};

	return (
		<nav className={navClass} onClick={handleLinkClick}>
			<ul className="wrapper nav-links">
				<li className="route-link">
					<NavLink activeClassName="active-link" exact to="/">
						Home
					</NavLink>
				</li>
				<li className="route-link">
					<NavLink activeClassName="active-link" to="/menu">
						Menu
					</NavLink>
				</li>
				{/* <li className="route-link">
					<NavLink activeClassName="active-link" to="/book">
						Book a Table
					</NavLink>
				</li> */}
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
			{/* 
			<ul className="hamburger">
				<li className="line"></li>
				<li className="line"></li>
				<li className="line"></li>
			</ul> */}
		</nav>
	);
}

export default NavBar;
