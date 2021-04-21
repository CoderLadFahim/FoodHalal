import './MenuStyles.scss';

import { NavLink } from 'react-router-dom';
import PageTitle from '../components/PageTitle.js';

function Menu(props) {
	return (
		<section className="menu-page">
			<div className="header-content">
				<PageTitle> Menu </PageTitle>
				<NavLink to="/book">
					<button className="btn">Book a Table</button>
				</NavLink>
			</div>

			<img
				src={
					process.env.PUBLIC_URL + './food_pics/appetizers/canape_salmon.jpg'
				}
				alt=""
			/>

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
