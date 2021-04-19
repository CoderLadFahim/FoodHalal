import './MenuStyles.scss';

import PageTitle from '../components/PageTitle';

function Menu(props) {
	return (
		<section className="menu-page">
			<PageTitle>Our Menu</PageTitle>

			<div className="menu">
				<ul className="items-subnav">
					<li className="food-type">Appetisers</li>
					<li className="food-type">Main</li>
					<li className="food-type">Desserts</li>
					<li className="food-type">Drinks</li>
				</ul>

				<div className="items-display">{/* MenuItems GO HERE */}</div>
			</div>
		</section>
	);
}

export default Menu;
