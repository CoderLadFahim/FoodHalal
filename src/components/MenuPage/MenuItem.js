import './MenuItemStyles.scss';
import CountControl from '../CountControl';

function MenuItem({ foodItem }) {
	return (
		<div
			className="menu-item"
			style={{
				width: 360,
				height: 300,
				backgroundImage: `url(${foodItem.img})`,
			}}
		>
			<div className="item-control">
				<button className="add-remove-btn">Add Item</button>
				{null && (
					<div className="item-count-control">
						<CountControl></CountControl>
						<p className="total-item-price">
							Total:
							<span className="total-price"></span>
						</p>
					</div>
				)}
			</div>

			<div className="item-label">
				<p className="item-name">{foodItem.name}</p>
				<p className="item-price">{foodItem.price}</p>
			</div>
		</div>
	);
}

export default MenuItem;
