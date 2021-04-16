import './MenuItemStyles.scss';

function MenuItem(props) {
	return (
		<div className="menu-item">
			<div className="food-image">
				<span className="price">$10</span>
			</div>
			<div className="item-control">
				<p className="item-name">Chicken Skewers</p>
				<button className="add-cart-btn">Add</button>
			</div>
		</div>
	);
}

export default MenuItem;
