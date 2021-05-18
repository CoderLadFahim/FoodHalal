import './MenuStyles.scss';

import { useState, useEffect } from 'react';
import TweenLite from 'gsap';

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

	useEffect(() => {
		const menuPageTL = TweenLite.timeline(
			{ delay: 1 },
			{ defaults: { ease: 'back.out' } }
		);

		menuPageTL
			.from('.table-book-btn', {
				duration: 0.5,
				yPercent: -100,
				opacity: 0,
			})
			.from('.food-menu', {
				duration: 1,
				xPercent: 100,
				opacity: 0,
			})
			.from('.food-link', {
				duration: 0.3,
				yPercent: 100,
				opacity: 0,
				stagger: 0.1,
			})
			.from('.menu-item', {
				duration: 1,
				yPercent: 100,
				opacity: 0,
				stagger: 0.1,
			});
	}, []);

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
