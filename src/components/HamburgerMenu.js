import './HamburgerMenuStyles.scss';

function Hamburger({ navToggler, navToggleState }) {
	let hamburgerClass = `hamburger ${navToggleState ? 'hamburger-close' : ''}`;

	return (
		<ul onClick={navToggler} className={hamburgerClass}>
			<li className="line"></li>
			<li className="line"></li>
			<li className="line"></li>
		</ul>
	);
}

export default Hamburger;
