import './MenuStyles.scss';

import { NavLink } from 'react-router-dom';
import PageTitle from '../components/PageTitle.js';
import menuItems from '../assets/foodItems.json';

function Menu(props) {
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
