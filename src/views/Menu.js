import './MenuStyles.scss';

import { useContext, useEffect } from 'react';

import { CartContext } from '../contexts/CartContext';
import { NavLink } from 'react-router-dom';
import PageTitle from '../components/PageTitle.js';
import menuItems from '../assets/foodItems.json';

function Menu(props) {
	const { dispatch } = useContext(CartContext);

	const createCartItem = item => {
		const { name, id, price } = item;
		return {
			name,
			id,
			price,
			count: 1,
		};
	};

	useEffect(() => {
		// dispatch({
		// 	type: '<ACTION_TYPE_HERE>',
		// 	actionPayload: '<ACTION_PAYLOAD_HERE>',
		// });
	}, []);

	return (
		<section className="menu-page">
			<div className="header-content">
				<PageTitle> Menu </PageTitle>
				<NavLink to="/book">
					<button className="btn">Book a Table</button>
				</NavLink>
			</div>
			{/* <img src="./food_pics/appetizers/beef_salami_crackers.jpg" alt="" /> */}
			Inky Pinkies per donkey monkeys
			<ul className="food-menu">
				<li className="food-link">Appetisers</li>
				<li className="food-link">Main</li>
				<li className="food-link">Desserts</li>
				<li className="food-link">Drinks</li>
			</ul>
		</section>
	);
}

export default Menu;
