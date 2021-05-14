import './MenuStyles.scss';

import { useState } from 'react';

import PageTitle from '../components/PageTitle';
import menuItems from '../assets/foodItems.json';
import MenuItem from '../components/MenuPage/MenuItem';
import TableBookBtn from '../components/TableBookBtn';

function Menu(props) {
	const [activeItemType, setActiveItemType] = useState('appetizers');

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
				<TableBookBtn />
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
