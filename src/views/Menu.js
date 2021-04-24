import './MenuStyles.scss';

import { /*useContext, useEffect,*/ useState } from 'react';

// import { CartContext } from '../contexts/CartContext';
import { NavLink } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import menuItems from '../assets/foodItems.json';
import MenuItem from '../components/MenuPage/MenuItem';

function Menu(props) {
	// const { dispatch } = useContext(CartContext);

	const [activeItemType, setActiveItemType] = useState('appetizers');

	// useEffect(() => {
	// 	// dispatch({
	// 	// 	type: '<ACTION_TYPE_HERE>',
	// 	// 	actionPayload: '<ACTION_PAYLOAD_HERE>',
	// 	// });
	// }, []);

	const itemsToShow = menuItems[activeItemType].map(item => (
		<MenuItem foodItem={item} key={item.id} />
	));

	return (
		<section className="menu-page">
			<div className="header-content">
				<PageTitle> Menu </PageTitle>
				<NavLink to="/book">
					<button className="btn">Book a Table</button>
				</NavLink>
			</div>

			<ul
				className="food-menu"
				onClick={e => {
					e.target.className === 'food-link' &&
						setActiveItemType(e.target.textContent.toLowerCase());
				}}
			>
				<li className="food-link">Appetizers</li>
				<li className="food-link">Main</li>
				<li className="food-link">Desserts</li>
				<li className="food-link">Drinks</li>
			</ul>

			{itemsToShow}
		</section>
	);
}

export default Menu;
