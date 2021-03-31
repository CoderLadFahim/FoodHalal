import './HamburgerMenuStyles.scss';

function Hamburger({ navToggler }) {
	// this function toggles the '.hamburger-close' class
	const toggleClass = ({ currentTarget }) => {
		const navClasses = Array.from(currentTarget.classList);

		if (!navClasses.includes('hamburger-close')) {
			currentTarget.classList.add('hamburger-close');
			navToggler(true);
		} else {
			currentTarget.classList.remove('hamburger-close');
			navToggler(false);
		}
	};

	return (
		<ul onClick={toggleClass} className="hamburger">
			<li className="line"></li>
			<li className="line"></li>
			<li className="line"></li>
		</ul>
	);
}

export default Hamburger;
