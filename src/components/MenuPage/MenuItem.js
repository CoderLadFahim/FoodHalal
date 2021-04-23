import './MenuItemStyles.scss';
import CountControl from '../CountControl';

function MenuItem(props) {
	return (
		<div className="menu-item">
			<div className="item-control">
				<button className="add-remove-btn">Add Item</button>
				<div className="item-count-control">
					<CountControl></CountControl>
					<p className="total-item-price">
						Total:
						<span className="total-price"></span>
					</p>
				</div>
			</div>

			<div className="item-label">
				<p className="item-name">ITEM_NAME</p>
				<p className="item-price">ITEM_PRICE</p>
			</div>
		</div>
	);
}

export default MenuItem;
