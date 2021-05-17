import './MenuItemStyles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CountControl from '../CountControl';

function MenuItem({ foodItem }) {
	const { cartItems, dispatch } = useContext(CartContext);
	const itemInCart = cartItems.find(item => item.id === foodItem.id);

	const createCartItem = item => {
		const { name, id, price } = item;
		return {
			name,
			id,
			price,
			count: 1,
		};
	};

	const handleCartInteraction = interactionType => {
		if (interactionType === 'REMOVE')
			dispatch({ type: 'REMOVE_ITEM', itemID: foodItem.id });
		else dispatch({ type: 'ADD_ITEM', item: createCartItem(foodItem) });
	};

	const incrementCartItemCount = () =>
		dispatch({ type: 'INCREMENT_ITEM_COUNT', itemID: foodItem.id });

	const decrementCartItemCount = () =>
		dispatch({ type: 'DECREMENT_ITEM_COUNT', itemID: foodItem.id });

	return (
		<div
			className="menu-item"
			style={{
				backgroundImage: `url(${foodItem.img})`,
			}}
		>
			<div className="item-control">
				<button
					onClick={() => handleCartInteraction(itemInCart ? 'REMOVE' : 'ADD')}
					className={`btn add-remove-btn ${itemInCart ? 'remove' : 'add'}`}
				>
					{itemInCart ? 'Remove' : 'Add'} Item
				</button>
				{itemInCart && (
					<div className="item-count-control">
						<CountControl
							incrementor={incrementCartItemCount}
							decrementor={decrementCartItemCount}
						>
							{itemInCart.count}
						</CountControl>
						<p className="total-item-price">
							Total:
							<span className="total-price">
								{itemInCart.price * itemInCart.count}Tk/-
							</span>
						</p>
					</div>
				)}
			</div>

			<div className="item-label">
				<p
					className="item-name"
					style={{
						'font-size': foodItem.name.length >= 15 ? '0.85rem' : '1.15rem',
					}}
				>
					{foodItem.name}
				</p>
				<p className="item-price">{foodItem.price}Tk/-</p>
			</div>
		</div>
	);
}

export default MenuItem;
