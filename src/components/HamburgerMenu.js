import './HamburgerMenuStyles.scss';
import { useLocation } from 'react-router-dom';

function Hamburger({ navToggler, navToggleState }) {
	let hamburgerClass = `hamburger ${navToggleState ? 'hamburger-close' : ''}`;
	const { pathname: currentRoutePath } = useLocation();

	const hamburgerMenuStyles = {
		bottom: 'auto',
		top: '80px',
	};

	return (
		<ul
			style={
				window.innerWidth <= 414 && currentRoutePath === '/'
					? hamburgerMenuStyles
					: {}
			}
			onClick={navToggler}
			className={hamburgerClass}
		>
			<li className="line"></li>
			<li className="line"></li>
			<li className="line"></li>
		</ul>
	);
}

export default Hamburger;
