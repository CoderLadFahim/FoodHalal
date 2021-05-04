import './MenuStyles.scss';

import { /*useContext, useEffect,*/ useState } from 'react';

// import { CartContext } from '../contexts/CartContext';
import { NavLink } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import menuItems from '../assets/foodItems.json';
import MenuItem from '../components/MenuPage/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Menu(props) {
	// const { dispatch } = useContext(CartContext);

	const [activeItemType, setActiveItemType] = useState('appetizers');

	// useEffect(() => {
	// 	// dispatch({
	// 	// 	type: '<ACTION_TYPE_HERE>',
	// 	// 	actionPayload: '<ACTION_PAYLOAD_HERE>',
	// 	// });
	// }, []);

	const foodLinks = Object.keys(menuItems).map(foodType => (
		<li
			key={foodType}
			className={`food-link ${activeItemType === foodType ? 'active' : ''}`}
		>
			{foodType}
		</li>
	));

	const itemsToShow = menuItems[activeItemType].map(item => (
		<MenuItem foodItem={item} key={item.id} />
	));

	return (
		<section className="menu-page wrapper">
			<div className="header-content">
				<PageTitle> Menu </PageTitle>
				<NavLink to="/book">
					<button className="btn">
						Book a Table
						<FontAwesomeIcon className="arrow-right" icon={faArrowRight} />
					</button>
				</NavLink>
			</div>

			<ul
				className="food-menu"
				onClick={e => {
					const foodLinkClasslist = Array.from(e.target.classList);
					foodLinkClasslist.includes('food-link') &&
						setActiveItemType(e.target.textContent.toLowerCase());
				}}
			>
				{foodLinks}
			</ul>

			<div className="items-display">{itemsToShow}</div>
		</section>
	);
}

export default Menu;
